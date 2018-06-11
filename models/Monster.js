const mongoose = require('mongoose')
const monsterSchema = require('../db/schemas/monsterSchema')

const Monster = mongoose.model('monster', monsterSchema)

module.exports = Monster