const Schema = require('mongoose').Schema

const userSchema = new Schema({
    username: String,
    trainerName: String,
    trainerID: Number,
    dateCreated: Date,
    dateLastupdated: Date
})

module.exports = userSchema