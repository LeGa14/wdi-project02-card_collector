const express = require('express')
const router = express.Router()
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
router.get('/:id', (req, res) => {

    // define the user's ID
    const thisUserId = req.params.id
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
router.get('/:id/edit', (req, res) => {

    User.findById(req.params.id)
        .then((userToChange) => {
            res.render('user/edit', { userToChange })
        })
        .catch((err) => res.send(err))
})

// UPDATE USER
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/user/${req.params.id}`)
        })
        .catch((err) => res.send(err))
})

// DESTROY USER
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            console.log('That user is no longer a Pokemon Trainer.')
            console.log('Good Riddens')
            res.redirect('/user')
        })    
})

module.exports = router