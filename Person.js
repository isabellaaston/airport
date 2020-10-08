class Person {
    constructor(name) {
        this.name = name
        this.bags = []
    }
    addBag(bag){
        this.bags.push(bag)
    }
}

class Passenger extends Person {
    callAttendant(request){
        return request
    }
}

class Crew extends Person {
    crossCheck(){
        return true
    }
}

module.exports = {Person, Passenger, Crew}