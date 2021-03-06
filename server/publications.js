Meteor.publish( 'posts', function() {
    return Posts.find();
});

Meteor.publish( 'userData', function() {
    if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                              {fields: {'createdAt': 1}});
    } else {
        this.ready();
    }
});

Meteor.publish( 'comments', function(postId) {
    return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});

