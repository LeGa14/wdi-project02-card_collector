const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainerSchema = require('./trainerSchema')

const userSchema = new Schema({
    
    username: String,
    email: { type: String, required: true, unique: true },
    tagline: String,
    userPhoto: String,
    // timestamps: { dateCreated: 'created_at', dateLastUpdated: 'updated_at' }
    // dateCreated: {type: Date, default: Date.now},
    // dateLastUpdated: {type: Date, default: Date.now},
    dateCreated: Date,
    dateLastUpdated: Date,

    trainers: [trainerSchema]
    
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