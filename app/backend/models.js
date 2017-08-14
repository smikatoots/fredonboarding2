var connect = process.env.MONGODB_URI;
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UsersSchema = schema({
    lastName: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    gender: {
        type: String
    },
    tin: {
        type: String
    },
    countryOfBirth: {
        type: String
    },
    countryOfResidence: {
        type: String
    },
    countryOfCitizenship: {
        type: String
    },
    telephoneNumber: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    email: {
        type: String
    },
    civilStatus: {
        type: String
    },
})

var User = mongoose.model('User', UsersSchema);

module.exports = {
    User
}
