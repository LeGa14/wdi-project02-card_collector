const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const userController = require('./controllers/userController')
const trainerController = require('./controllers/trainerController')
const monsterController = require('./controllers/monsterController')

const app = express()
require('dotenv').config()

// connect to database
mongoose.connect('mongodb://localhost:27017/card-collector')// Test mongoDB as local host
// mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Controller connections
app.use('/', indexRouter)
app.use('/user', userController)
app.use('/user/:userId/trainer', trainerController)
app.use('/user/:userId/trainer/:trainerId/monster', monsterController)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app