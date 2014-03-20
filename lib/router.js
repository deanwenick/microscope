Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    //this will show loading template until posts returns, 
    //this will only happen once, on first time hitting app
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
    this.route('postsList', {path: '/'});

    this.route('postPage', {
        path: '/posts/:_id',
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

var requireLogin = function() {
    if (! Meteor.user()) {
        if ( Meteor.loggingIn() )
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');
        this.stop();
    }
};

//runs requireLogin before routing to postSubmit
Router.before(requireLogin, {only: 'postSubmit'});