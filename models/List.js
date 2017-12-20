// Require the mongoose package
const mongoose = require('mongoose');

// Define the BucketlistSchema with title, description and category
const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const Bucketlist = module.exports = mongoose.model('Bucketlist', BucketlistSchema);

//Bucketlist.find() returns all the lists
module.exports.getAllLists = (callback) => {
    Bucketlist.find(callback)
}

// newList.save is used to insert the document into MongoDB
module.exports .addList = (newList, callback) => {
    newList.save(callback);
}

// deleting needs us to pass an id parameter to Bucketlist.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    Bucketlist.remove(query, callback);
}