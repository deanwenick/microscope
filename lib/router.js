Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    //this will show loading template until posts returns, 
    //this will only happen once, on first time hitting app
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
    this.route('postsList', {path: '/'});
});