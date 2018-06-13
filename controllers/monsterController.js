const express = require('express')
// const userRouter = express.Router()
const trainerRouter = express.Router()
const monsterRouter = express.Router({ mergeParams: true })
const User = require('../models/User')
const Trainer = require('../models/Trainer')
const Monster = require('../models/Monster')


// INDEX MONSTERS
monsterRouter.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const trainers = user.trainers
            trainers.id(req.params.trainerId)
                .then((foundTrainer) => {
                    monsters = foundTrainer.monsters
                    res.render('comment/index', {
                        monsters
                })
            })
            .catch((err) => (err))
        })
        .catch((err) => (err))
    // trainer = user.trainers
    // listOfMonsters = foundTrainer.monsters

})

// User.findById(req.params.userId)
//     .then((user) => {
//         const trainers = user.trainers
//         trainers.id(req.params.trainerId)
//             .then((foundTrainer) => {
//                 monsters = foundTrainer.monsters
//             })
//         res.render('comment/index', {
//             monsters
//         })
//     })


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

trainerRouter.use('/user/:userId/:trainerId/monster', monsterRouter)


module.exports = monsterRouter

// router.get('/', (req, res, next) => {

//     User.find()
//         .then((listOfUsers) => {
//             Trainer.find()
//                 .then((listOfTrainers) => {
//                     Monster.find()
//                         .then((listofMonsters) => {
//                             res.render('monster/index', {
//                                 listOfMonsters

//                             })
//                         })
//                         .catch((err) => res.send(err))
//                 })
//                 .catch((err) => res.send(err))
//         })
//         .catch((err) => res.send(err))
// })