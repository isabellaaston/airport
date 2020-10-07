class Airport {
    constructor(city, capacity) {
        if(!city || !capacity) throw new Error("missing city or capacity")
        this.city = city
        this.capacity = capacity
        this.planes = []
    }
    landPlane(plane){
        if(this.planes.length < this.capacity) {
            this.planes.push(plane)
        }
        else {
            throw new Error("Airport has no landing space")
        }
    }
}

module.exports = Airport