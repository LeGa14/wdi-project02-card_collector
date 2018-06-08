const Trainer = require('mongoose').Schema

const trainerSchema = new Schema({
    name: String,
    region: String,
    gender: String,
    trainerID: String,
    age: Number,
    sprite: String
})

module.exports = trainerSchema