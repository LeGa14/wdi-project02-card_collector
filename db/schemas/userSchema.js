const Schema = require('mongoose').Schema

const userSchema = new Schema({
    
    username: String,
    email: String,
    tagline: String,
    userPhoto: String,
    // timestamps: { dateCreated: 'created_at', dateLastUpdated: 'updated_at' }
    dateCreated: {type: Date, default: Date.now},
    dateLastUpdated: {type: Date, default: Date.now}
    
})

module.exports = userSchema