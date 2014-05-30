Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find( '[  name=url ]' ).val(),
            title: $(e.target).find( '[ name=title ]' ).val(),
            author: $(e.target).find( '[ name=author ]' ).val()
        };

        //first way of inserting new post
        //post._id = Posts.insert(post);

        Meteor.call('post', post, function(error, id) {
            if (error) {
                //return alert(error.reason); old way
                //display error to the user
                Errors.throw(error.reason);
                if (error.error === 302)
                    router.go('postPage', {_id: error.details});
            } else {
                Router.go( 'postPage', {_id: id} );
            }
        });
    }
});