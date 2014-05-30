if (Posts.find().count() === 0) {
    var now = new Date().getTime();

    //create two users
    var tomId = Meteor.users.insert({
        profile: { name: 'Tom Coleman' }
    });
    var tom = Meteor.users.findOne(tomId);
    var sachaId = Meteor.users.insert({
        profile: { name: 'Sacha Greif' }
    });
    var sacha = Meteor.users.findOne(sachaId);

    var telescopeId = Posts.insert({
        title: 'Introducing Telescope',
        userId: sacha._id,
        author: sacha.profile.name,
        contributer: "The Author",
        url: 'http://sachagreif.com/introducing-telescope',
        submitted: now - 7 * 3600 * 1000
    });

    Comments.insert({
        postId: telescopeId,
        userId: tomId,
        author: tom.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'Interesting project Sacha, can I get involved?'
    });

    Comments.insert({
        postId: telescopeId,
        userId: sachaId,
        author: sacha.profile.name,
        submitted: now - 3 * 3600 * 1000,
        body: 'You sure can Tom!'
    });

    Posts.insert({
        title: 'Meteor',
        userId: tom._id,
        author: tom.profile.name,
        url: 'http://meteor.com',
        contributer: 'The Author',
        submitted: now - 10 * 3600 * 1000
    });

    Posts.insert({
        title: 'The Meteor Book',
        userId: tom._id,
        author: tom.profile.name,
        url: 'http://themeteorbook.com',
        contributer: 'The Author',
        submitted: now - 12 * 3600 * 1000
    });
}