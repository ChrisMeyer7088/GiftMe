const mongoose = require('mongoose');

let EventSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    StartDate: {
        type: String,
        required: true
    },
    Durration: {
        type: String,
        required: true
    }
});

let Event = module.exports = mongoose.model('Events', EventSchema);

module.exports.getEvents = function(userName, callback) {
    let query = {UserName: userName};
    Event.find(query, callback);
};

module.exports.storeEvent = function(newEvent, callback) {
    newEvent.save(callback);
}