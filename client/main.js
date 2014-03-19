//this subscription is now handled by router in waitOn method
//Meteor.subscribe( 'posts' );
Meteor.startup(function() {
    Session.set('pageTitle', "Microscope");
});