const express = require('express')
const userRouter = express.Router()
const trainerRouter = express.Router({ mergeParams: true })
const monsterRouter = express.Router({ mergeParams: true })
const User = require('../models/User')
const Trainer = require('../models/Trainer')
const Monster = require('../models/Monster')

userRouter.use('/user/:userId/trainer', monsterRouter)
trainerRouter.use('/user/:userId/trainer', monsterRouter)

// INDEX MONSTERS
// NEW MONSTER
// CREATE/ADD MONSTER
// SHOW MONSTER
// DESTROY/REMOVE MONSTER

monsterRouter.get('/', (req, res) => {
    
        // const userId = req.params.userId
        // let currentTrainer = Trainer.findById(userId)
    
        Trainer.findById(req.params.userId)
            .then((user) => {
                // listOfMonsters = user.monsters
                user = user
                listOfMonsters = user.monsters
                // returned an [array]
                res.render('monster/index', {
                    user,
                    listOfMonsters
                })
            })
            .catch((err) => res.send(err))
    })
    
    // NEW
    monsterRouter.get('/new', (req, res) => {
        res.render('monster/new', {
            userId: req.params.userId,
            // currentTrainer: Trainer.findById(req.params.userId)        
        })
    })
    
    // CREATE
    monsterRouter.post('/', (req, res) => {
    
        const newTrainer = new Trainer(req.body)
    
        Trainer.findById(req.params.userId)
            .then((user) => {
                user.monsters.push(newTrainer)
    
                return user.save()
            })
            .then(() => {
                res.redirect(`/user/${req.params.userId}/monster`)
            })
    })
    
    // SHOW
    monsterRouter.get('/:monsterId', (req, res) => {
        // let currentTrainer = Trainer.findById(userId)
    
        // find the USER based on the ID
        Trainer.findById(req.params.userId)
            .then((user) => {
                user = user
                foundTrainer = user.monsters.id(req.params.monsterId)
                res.render('monster/show', {
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
    monsterRouter.delete('/:monsterId', (req, res) => {
        Trainer.findByIdAndUpdate(req.params.userId, {
            $pull: {
                monsters: { _id: req.params.monsterId }
            }
        })
            .then((user) => {
                // user.monsters.id(req.params.monsterId).remove()
                console.log(`${user.username}'s monster has been deleted.`)
                console.log(`They must not have made the cut.`)
                res.redirect(`/user/${user._id}/monster`)
            })
    })

module.exports = monsterRouter