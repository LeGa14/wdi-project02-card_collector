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
// CREATE USER
// SHOW USER
// EDIT USER
// UPDATE USER
// DESTROY USER

module.exports = router