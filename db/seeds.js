const mongoose = require('mongoose')
const User = require('../models/User')
const Trainer = require('../models/Trainer')

require('dotenv').config()

// mongoose.connect('mongodb://localhost:27017/card-collector')// Test mongoDB as local host
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Card Collector "seeds.js" connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


User.remove()
    .then(() => {

        //creating new Trainer reset/test data
        const trainer0 = new Trainer({
            name: 'Blue',
            region: 'Kanto',
            gender: 'male',
            trainerId: 'stringONumbers',
            age: 25,
            sprite: 'http://www.pokestadium.com/assets/img/tools/trainercard/trainers/male/46.png'
        })
        const trainer1 = new Trainer({
            name: 'Red',
            region: 'Kanto',
            gender: 'female',
            trainerId: 'stringONumbers',
            age: 21,
            sprite: 'http://www.pokestadium.com/assets/img/tools/trainercard/trainers/female/42.png'
        })
        const trainer2 = new Trainer({
            name: 'Silver',
            region: 'Johto',
            gender: 'male',
            trainerId: 'stringONumbers',
            age: 18,
            sprite: 'http://www.pokestadium.com/assets/img/tools/trainercard/trainers/male/106.png'
        })
        const trainer3 = new Trainer({
            name: 'Crystal',
            region: 'Johto',
            gender: 'female',
            trainerId: 'stringONumbers',
            age: 25,
            sprite: 'http://www.pokestadium.com/assets/img/tools/trainercard/trainers/female/84.png'
        })

        //creating new User reset/test data
        const user0 = new User({
            username: 'BackToTheCool',
            email: 'thisguy@thatmail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'https://www.placecage.com/gif/284/196',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now(),
            trainers: [trainer0, trainer1, trainer2, trainer3]
        })
        const user1 = new User({
            username: 'legacy_092',
            email: 'thatguy@thismail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'https://www.placecage.com/gif/250/200',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now(),
            trainers: [trainer0, trainer1, trainer2, trainer3]
        })
        const user2 = new User({
            username: 'glemonjr68',
            email: 'anotherperson@anothermail.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'https://www.placecage.com/gif/275/200',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now(),
            trainers: [trainer0, trainer1, trainer2, trainer3]
        })
        const user3 = new User({
            username: 'FroZolar92',
            email: 'finalseed@user.com',
            tagline: 'This is my world! And TAGLINE. YEAH!!!',
            userPhoto: 'https://www.placecage.com/gif/300/200',
            dateCreated: Date.now(),
            dateLastUpdated: Date.now(),
            trainers: [trainer0, trainer1, trainer2, trainer3]
        })

        const currentUsers = [user0, user1, user2, user3]

        return User.insertMany(currentUsers)
    })
    .then(() => {
        mongoose.connection.close()
    })