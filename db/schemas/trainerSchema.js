const mongoose = require('mongoose')
const Schema = mongoose.Schema
const monsterSchema = require('./monsterSchema')

const trainerSchema = new Schema({
    name: String,
    region: String,
    gender: String,
    userId: String,
    trainerId: String,
    age: Number,
    sprite: String

})

module.exports = trainerSchema