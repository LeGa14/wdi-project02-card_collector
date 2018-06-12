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
