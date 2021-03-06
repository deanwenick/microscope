Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    //this will show loading template until posts returns, 
    //this will only happen once, on first time hitting app
    waitOn: function() {
        return [Meteor.subscribe('posts'), Meteor.subscribe('notifications')];
    }
});

Router.map(function() {
    this.route('postsList', {path: '/'});

    this.route('postPage', {
        path: '/posts/:_id',
        waitOn: function() {
            return Meteor.subscribe('comments', this.params._id);
        },
        data: function() { return Posts.findOne(this.params._id); }
    });
    
    this.route('postEdit', {
        path: '/posts/:_id/edit',
        data: function () {return Posts.findOne(this.params._id); }
    });

    this.route('postSubmit', {
        path: '/submit'
    });

});//end map

var requireLogin = function(pause) {
    if (! Meteor.user()) {
        if ( Meteor.loggingIn() )
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');
        pause();
    }
};

//runs requireLogin before routing to postSubmit
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(function () { Errors.clearSeen(); });