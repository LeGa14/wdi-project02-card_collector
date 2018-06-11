const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Trainer = require('../models/Trainer')

// INDEX
router.get('/', (req, res, next) => {

    User.findById(req.params.userId)
        .then((listOfTrainers) => {
            // listOfTrainers = user.trainers
            listOfTrainers = user(req.params.this).trainers()
            res.render('/homework/${req.params.homeworkId}/comment', {
                listOfTrainers
            })
        })
})

// NEW
// CREATE
// SHOW
// DESTROY

module.exports = router