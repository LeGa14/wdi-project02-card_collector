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
trainerRouter.get('/new', (req, res) => {
    res.render('trainer/new', {
        userId: req.params.userId,
        // currentUser: User.findById(req.params.userId)        
    })
})

// CREATE
trainerRouter.post('/', (req, res) => {

    const newTrainer = new Trainer(req.body)

    User.findById(req.params.userId)
        .then((user) => {
            user.trainers.push(newTrainer)

            return user.save()
        })
        .then(() => {
            res.redirect(`/user/${req.params.userId}/trainer`)
        })
})

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
trainerRouter.delete('/:trainerId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $pull: {
            trainers: { _id: req.params.trainerId }
        }
    })
        .then((user) => {
            // user.trainers.id(req.params.trainerId).remove()
            console.log(`${user.username}'s trainer has been deleted.`)
            console.log(`They must not have made the cut.`)
            res.redirect(`/user/${user._id}/trainer`)
        })
})

module.exports = trainerRouter