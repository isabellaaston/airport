const { Crew } = require("./Person")

class Plane {
    constructor(destination, crewCapacity, passengerCapacity) {
        this.crewCapacity = crewCapacity
        this.passengerCapacity = passengerCapacity
        this.destination = destination
        this.crew = []
        this.passengers = []
    }
    boardCrew(crew){
        if(this.crew.length < this.crewCapacity){
        this.crew.push(crew)
        }
        else {
            throw new Error("no more staff needed")
        }
    }
    boardPassengers(passenger){
        if(this.passengers.length < this.passengerCapacity) {
            this.passengers.push(passenger)
        }
        else {
            throw new Error("plane is full")
        }
    }

    boardPlane(person){
        if(person instanceof Crew){
            this.boardCrew(person)
        } else {
            this.boardPassengers(person)
        }
    }
}

module.exports = Plane