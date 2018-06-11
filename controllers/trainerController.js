const express = require('express')
const userRouter = express.Router()
const trainerRouter = express.Router({ mergeParams: true })
const User = require('../models/User')
const Trainer = require('../models/Trainer')

userRouter.use('/user/:userId/trainer', trainerRouter)
// const userId
// const currentUser = User.findById(userId)

// INDEX
trainerRouter.get('/', (req, res) => {

    // const userId = req.params.userId
    // let currentUser = User.findById(userId)

    User.findById(req.params.userId)
        .then((user) => {
            // listOfTrainers = user.trainers
            user = user
            listOfTrainers = user.trainers
            // returned an [array]
            res.render('trainer/index', {
                user,
                listOfTrainers
            })
        })
        .catch((err) => res.send(err))
})

// NEW
// CREATE
// SHOW
trainerRouter.get('/:trainerId', (req, res) => {
    // let currentUser = User.findById(userId)

    // find the USER based on the ID
    User.findById(req.params.userId)
        .then((user) => {
            user = user
            foundTrainer = user.trainers.id(req.params.trainerId)
            res.render('trainer/show', {
                user,
                foundTrainer
            })
        })
        .catch((err) => res.send(err))

        // post.comments.id(my_id).remove();
        // post.save(function (err) {
        //   // embedded comment with id `my_id` removed!
        // });
})

// DESTROY

module.exports = trainerRouter