const mongoose = require('mongoose')
const trainerSchema = require('../db/schemas/trainerSchema')

const Trainer = mongoose.model('trainer', trainerSchema)

module.exports = Trainer