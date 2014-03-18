//static data used to show concept of data context
/*var postsData = [
    {
        title: 'Introducing Telescope',
        author: 'Sacha Grief',
        url: 'http://sachgreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    }
];*/



Template.postsList.helpers({
    //replacing postsData below with dynamic collection from db
    //posts: postsData

    posts: function() {
        return Posts.find();
    }
});