const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainerSchema = require('./trainerSchema')
const monsterSchema = require('./monsterSchema')

class User {
    constructor(username) {
        username
        trainers = []
        email = "someone@somewhere.com"
        tagline = "I'm the best"
        photo = "link.2.pic"

    }
}

class Monster extends User {
    constructor(user, species) {
        user
        trainer = user.id
        species = "eevee"
        nickname = 17
        sprite = "this.link.to.a.photo"
    }
}

class Trainer extends User {
    constructor(user, name) {
        user
        name
        gender = "male"
        age = 15
        region = "Kanto"
        sprite = "link.to.a.pic"

    }
}




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