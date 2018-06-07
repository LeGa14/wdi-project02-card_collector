const mongoose = require('mongoose')
const User = require('../models/User')

mongoose.connect('process.env.MONGODB_URI')
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
            trainerName: 'Lamont',
            trainerID: 000001,
            dateStarted: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user1 = new User({
            username: 'legacy_092',
            trainerName: 'Red',
            trainerID: 000002,
            dateStarted: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user2 = new User({
            username: 'glemonjr68',
            trainerName: 'Blue',
            trainerID: 000003,
            dateStarted: Date.now(),
            dateLastUpdated: Date.now()
        })
        const user3 = new User({
            username: 'FroZolar92',
            trainerName: '21 Savage',
            trainerID: 000004,
            dateStarted: Date.now(),
            dateLastUpdated: Date.now()
        })

        const currentUsers = [user0, user1, user2, user3]

        return User.insertMany(currentUsers)
    })
    .then(() => {
        mongoose.connection.close()
    })