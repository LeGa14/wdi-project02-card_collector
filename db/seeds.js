const mongoose = require('mongoose')
const User = require('../models/User')

// mongoose.connect('mongodb://localhost:27017/card-collector')// Test mongoDB as local host
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Card Collector "seeds.js" connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


User.remove()
    .then(() => {

        //creating new User test data
        const user0 = new User({
            username: 'BackToTheCool',
            email: 'thisguy@thatmail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'thisCouldbealink',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user1 = new User({
            username: 'legacy_092',
            email: 'thatguy@thismail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'thisCouldbealink',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user2 = new User({
            username: 'glemonjr68',
            email: 'anotherperson@anothermail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'thisCouldbealink',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user3 = new User({
            username: 'FroZolar92',
            email: 'finalseed@user.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'thisCouldbealink',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now()
        })

        const currentUsers = [user0, user1, user2, user3]

        return User.insertMany(currentUsers)
    })
    .then(() => {
        mongoose.connection.close()
    })