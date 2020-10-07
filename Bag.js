class Bag {
    constructor(weight) {
        if(!weight) throw new Error("must have weight")
        this.weight = weight
    }
}

module.exports = Bag