if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        author: 'Sacha Grief',
        url: 'http://sachgreif.com/introducing-telescope/',
        contributer: 'The Author'
    });

    Posts.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com',
        contributer: 'The Author'
    });

    Posts.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com',
        contributer: 'The Author'
    });
}