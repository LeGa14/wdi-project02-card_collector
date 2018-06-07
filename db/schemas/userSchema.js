const Schema = require('mongoose').Schema

const userSchema = new Schema({
    username: String,
    trainerName: String,
    trainerID: Number,
    dateCreated: Date,
    dateLastUpdated: Date
})

module.exports = userSchema