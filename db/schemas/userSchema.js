const Schema = require('mongoose').Schema
const trainerSchema = require('./trainerSchema')

const userSchema = new Schema({
    
    username: String,
    email: String,
    tagline: String,
    userPhoto: String,
    // timestamps: { dateCreated: 'created_at', dateLastUpdated: 'updated_at' }
    dateCreated: {type: Date, default: Date.now},
    dateLastUpdated: {type: Date, default: Date.now},

    trainers: [trainerSchema]
    
})

module.exports = userSchema