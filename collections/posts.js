Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        //only allow logged in users to post
        return !! userId;
    }
});