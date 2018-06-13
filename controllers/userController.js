const express = require('express')
const router = express.Router()
// const trainerRouter = require('./trainer').Router()
const User = require('../models/User')

// INDEX USER
router.get('/', (req, res, next) => {

    User.find()
        .then((listOfUsers) => {
            res.render('user/index', {
                listOfUsers
            })
        })
        .catch((err) => res.send(err))
})

// NEW USER
router.get('/new', (req, res) => {
    res.render('user/new')
})

// CREATE 
router.post('/', (req, res) => {
    const newUser = req.body
    // const currentDate = new Date()
    User
        .create(newUser)
        .then(() => {
            res.redirect('/user')
        })
        .catch((err) => res.send(err))
})

// SHOW 
router.get('/:userId', (req, res) => {

    // define the user's ID
    const thisUserId = req.params.userId
    // find the user based on the ID 
    User.findById(thisUserId)
        // then take that user being shown
        .then((shownUser) => {
            // render its information using the USER SHOW view
            res.render('user/show', {
                // the view will receive the UserID and shownUser Object
                thisUserId,
                shownUser})
        })
        .catch((err) => res.send(err))
})

// EDIT 
router.get('/:userId/edit', (req, res) => {

    User.findById(req.params.userId)
        .then((userToChange) => {
            res.render('user/edit', { userToChange })
        })
        .catch((err) => res.send(err))
})

// UPDATE USER
router.put('/:userId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then(() => {
            res.redirect(`/user/${req.params.userId}`)
        })
        .catch((err) => res.send(err))
})

// DESTROY USER
router.delete('/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(() => {
            console.log('That user is no longer a Pokemon Trainer.')
            console.log('Good Riddens')
            res.redirect('/user')
        })    
})

// router.use(':userId/trainer', trainerController)

// router.use('/:userId/trainer', function(req, res, next) {
//     req.id = req.params.userId;
//     next()
//   }, trainer);

module.exports = router