class Airport {
    static airports = [];
    constructor(name) {
        if(!name) throw new Error("missing name")
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }

    landPlane(plane){
            this.planes.push(plane)
    }

    planeTakeOff(plane, destination){
        let runway = this.planes.indexOf(plane)
        this.planes.splice(runway, 1)
        plane.destination = destination
        const airport = this.constructor.airports.find( (airport) => {return airport.name===destination})
        airport.landPlane(plane)
    }
}

module.exports = Airport