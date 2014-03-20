Posts = new Meteor.Collection('posts');

//first way to enforce logged in users only can make new post
/*Posts.allow({
    insert: function(userId, doc) {
        //only allow logged in users to post
        return !! userId;
    }
});*/

Meteor.methods({
    post: function(postAttributes) {
        var user = Meteor.user();
        var postWithSameLink = Posts.findOne({url: postAttributes.url});

        //ensure user is logged in
        if (!user)
            throw new Meteor.Error(401, "You must be logged in to make a new post");

        //ensure post has a title
        if (!postAttributes.title)
            throw new Meteor.Error(422, "Please list the title");

        //check for previos posts with same link
        if (postAttributes.url && postWithSameLink) {
            throw new Meteor.Error(302, "This link has already been posted", postWithSameLink._id);
        }

        //pick out the whitelisted keys
        var post = _.extend(_.pick(postAttributes, 'url', 'title', 'author'), {
            userId: user._id,
            contributer: user.username,
            submitted: new Date().getTime()
        });

        var postId = Posts.insert(post);
        console.log(postId);
        return postId;
    }
});