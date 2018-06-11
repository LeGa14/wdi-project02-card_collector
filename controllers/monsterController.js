const express = require('express')
const userRouter = express.Router()
const trainerRouter = express.Router({ mergeParams: true })
const monsterRouter = express.Router({ mergeParams: true })
const User = require('../models/User')
const Trainer = require('../models/Trainer')
const Monster = require('../models/Monster')

userRouter.use('/user/:userId/trainer', monsterRouter)
trainerRouter.use('/user/:userId/trainer', monsterRouter)

module.exports = monsterRouter