// check that the userId specified does own the document

ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};