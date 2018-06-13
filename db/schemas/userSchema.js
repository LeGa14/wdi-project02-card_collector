const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainerSchema = require('./trainerSchema')
const monsterSchema = require('./monsterSchema')

const userSchema = new Schema({

    username: String,
    email: { type: String, required: true, unique: true },
    tagline: String,
    userPhoto: String,
    dateCreated: Date,
    dateLastUpdated: Date,

    trainers: [trainerSchema],
    monsters: [monsterSchema]

})

// Creates timestamp
userSchema.pre('save', function (next) {
    const now = new Date()
    this.dateLastUpdated = now
    if (!this.dateCreated) {
        this.dateCreated = now
    }
    next()
})

module.exports = userSchema