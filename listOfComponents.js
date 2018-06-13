class SchemaComponent { }


class User {
    constructor() {
        this.userName = userName;
        this.user = breed;
        this.photo = "";
        this.tagline = "";
        this.userId = this._id;
        this.trainers = [];
    }
    eat(food) {
        this.diet.push(food);
        console.log(this.diet);
    }
    addTrainer(newTrainer) {
        this.trainers.push(newTrainer);
    }
    countTrainers() {
        return this.trainers.length;
    }
}

class Trainer extends URLSearchParams{
    constructor(userId) {
        this.name = trainerName;
        this.region = "";
        this.gender = "";
        this.userId = userId._id
        this.trainerId = userId._id;
        this.sprite = "";
        this.pokemonCollection = [];
    }
    countPokemon() {
        return this.pokemonCollection.length;
    }
}
class Pokemone extends Trainer {
    constructor(userId, trainerId) {
        this.name = pokemonName;
        this.level = NaN;
        this.nickname = "";
        this.userId = userName._id;
        this.trainerId = this.userId._id;
        this.pokemonId = this.trainerId._id;
}





const albums = require('express').Router();
const tracks = require('./tracks').Router();

//...

// Our root route to /albums
albums.get('/', function(req, res, next) {
  // res.send() our response here
});

// A route to handle requests to any individual album, identified by an album id
albums.get('/:albumId', function(req, res, next) {
  let albumId = req.params.albumId;
  // retrieve album from database using albumId
  // res.send() response with album data
});

// Note, this route represents /albums/:albumId/tracks because our top-level router is already forwarding /albums to our Albums router!
albums.use('/:albumId/tracks', tracks);

module.exports = albums;
//...
//
//
//

const tracks = require('express').Router();

//...

// The root router for requests to our tracks path
track.get('/', function(req, res, next) {
  let albumId = req.params.albumId; // Our problem line

  // retrieve album's track data and render track list page
});

// The route for handling a request to a specific track
track.get('/:trackId', function(req, res, next) {
  let albumId = req.params.albumId; // <-- How do we get this?
  let trackId = req.params.trackId;

  // retrieve individual track data and render on single track page
});

//...

module.exports = tracks;