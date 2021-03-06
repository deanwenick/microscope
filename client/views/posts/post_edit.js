Template.postEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            title: $(e.target).find( '[name=title]' ).val(),
            url: $(e.target).find( '[name=url]' ).val()
        };

        Posts.update(currentPostId, {$set: postProperties}, function (error) {
            if (error) {
                alert(error.reason);
            } else {
                router.go('postPage', {_id: currentPostId});
            }
        });
    },

    'click delete': function (e) {
        e.preventDefault();

        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            router.go('postsList');
        }
    }
});