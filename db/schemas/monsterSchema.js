const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monsterSchema = new Schema({
    monster: String,
    nickname: String,
    level: Number,
    sprite: String
})

module.exports = monsterSchema