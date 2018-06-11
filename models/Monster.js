const mongoos = require('mongoose')
const monsterSchema = require('../db/monsterSchema')

const Monster = mongoos.model('monster', monsterSchema)

module.exports = Monster