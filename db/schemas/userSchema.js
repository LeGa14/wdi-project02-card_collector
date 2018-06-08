const Schema = require('mongoose').Schema

const userSchema = new Schema({
    
    username: String,
    email: String,
    tagline: String,
    userPhoto: String,
    dateCreated: {type: Date, default: Date.now},
    dateLastUpdated: {type: Date, default: Date.now}
    // timestamps: { }
    
})

module.exports = userSchema