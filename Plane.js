class Plane {
    constructor(crewCapacity, passengerCapacity, destination) {
        this.crewCapacity = crewCapacity
        this.passengerCapacity = passengerCapacity
        this.destination = destination
        this.crew = []
        this.passengers = []
    }
    staffPlane(crew){
        if(this.crew.length < this.crewCapacity){
        this.crew.push(crew)
        }
        else {
            throw new Error("plane is full")
        }
    }
    boardPlane(passenger){
        if(this.passengers.length < this.passengerCapacity) {
            this.passengers.push(passenger)
        }
        else {
            throw new Error("plane is full")
        }
    }
}

module.exports = Plane