const toProperCase = (str) => {
    return str.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ')

}
class AppComponent {
    constructor(name) {
        this.name = name;
        this.schemaName = `${name}Schema`;
        this.modelName = toProperCase(this.name);
        this.controller = `${name}Controller`;
        `${name}` = {};
    }
}

class User {
    constructor(userId) {
        this.userId = userId;
    }
}

class Trainer extends User {
    constructor(userId, trainerId) {
        this.userId = userId;
        this.trainerId = trainerId;
    }
}

class Pokemon extends Trainer {
    constructor(userId, trainerId, pokemonId) {
        this.userId = userId;
        this.trainerId = trainerId;
        this.pokemonId = pokemonId;
    }
}