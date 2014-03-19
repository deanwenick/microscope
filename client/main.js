//this subscription is now handled by router in waitOn method
//Meteor.subscribe( 'posts' );

//works when header with pageTitle is in layout.html, not in header.html
Meteor.startup(function() {
    Session.set('pageTitle', "Microscope");
});