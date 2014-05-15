//local-only collection for errors
Errors = new Meteor.Collection(null);

throwError = function(message) {
    Errors.insert({message: message, seen: false});
};

clearErrors = function() {
    Errors.remove({seen: true});
};

Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

//make note that error has been seen when template rendered
Template.error.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.update(error._id, {seen: true});
    });
};

