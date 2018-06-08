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
    User
        .create(newUser)
        .then(() => {
            res.redirect('/user')
        })
})

// SHOW 
router.get('/:id', (req, res) => {
    
    User.findById(req.params.id)
    .then((singleUser) => {
        res.render('user/show', {singleUser})
    })
})

// EDIT USER
// UPDATE USER
// DESTROY USER

module.exports = router