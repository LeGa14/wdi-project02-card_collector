const Schema = require('mongoose').Schema

const userSchema = new Schema({
    
    username: String,
    email: String,
    tagline: String,
    userPhoto: String,
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