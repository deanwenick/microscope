Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find( '[  name=url ]' ).val(),
            title: $(e.target).find( '[ name=title ]' ).val(),
            author: $(e.target).find( '[ name=author ]' ).val()
        };
        alert(post.url);

        //first way of inserting new post
        //post._id = Posts.insert(post);

        Meteor.call('post', post, function(error, id) {
            alert("meteor call here" + id);
            if (error)
                return alert('e ' + error.reason);

        Router.go( 'postPage', {_id: id} );
        });

    }
});