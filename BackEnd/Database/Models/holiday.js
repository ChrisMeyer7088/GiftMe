const mongoose = require('mongoose');

//Holiday Schema

let HolidaySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        required: true
    }
});

let Holiday = module.exports = mongoose.model('Holidays', HolidaySchema);

module.exports.getCurrentHoliday = function(callback) {
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = mm + '/' + dd;

    let query = {Date: today}
    Holiday.findOne(query, callback);
}

function getHolidayByName(name, date, callback){
    let query = {Name: name, Date: date};
    Holiday.findOne(query, callback);
}

module.exports.storeDate = function(newHoliday, callback) {
    getHolidayByName(newHoliday.Name, newHoliday.Date, (err, holiday) => {
        if(holiday != null) {
            console.log('Holiday exists');
        } else {
            newHoliday.save(callback);
        }
    });
}