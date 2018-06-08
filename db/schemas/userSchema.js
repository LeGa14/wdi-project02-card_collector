const Schema = require('mongoose').Schema

const userSchema = new Schema({
    username: String,
    trainerName: String,
    trainerID: Number,
    dateCreated: {
        type: Date,
        deafault: new Date()
    },
    dateLastUpdated: {
        type: Date,
        deafault: new Date()
    }
})

module.exports = userSchema