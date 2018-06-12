const express = require('express')
const trainerRouter = express.Router()
const monsterRouter = express.Router({ mergeParams: true })
const User = require('../models/User')
const Trainer = require('../models/Trainer')
const Monster = require('../models/Monster')

trainerRouter.use('/user/:userId/trainer/:trainerId/monster', monsterRouter)

// INDEX MONSTERS
monsterRouter.get('/', (req, res) => {
})

// NEW MONSTER
monsterRouter.get('/new', (req, res) => {
})

// CREATE/ADD MONSTER
monsterRouter.post('/', (req, res) => {
})
// SHOW MONSTER
monsterRouter.get('/:monsterId', (req, res) => {
})
// DESTROY/REMOVE MONSTER
monsterRouter.delete('/:monsterId', (req, res) => {
})


module.exports = monsterRouter