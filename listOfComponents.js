class SchemaComponent {}

class Trainer {
    constructor(trainerName) {
        this.name = trainerName;
        this.region = "";
        this.gender = "";
        this.trainerId = "";
        this.sprite = "";
    }
}

class User {
    constructor(modelName) {
      this.name = modelName;
      this.user = breed;
      this.photo = "";
      this.tagline = "";
      this.trainers = [];
    }
    eat(food) {
      this.diet.push(food);
      console.log(this.diet);
    }
    addTrainer(newTrainer) {
        this.trainers.push(newTrainer);
    }
  }