const fs = require("fs");
const {readFile} = require("fs/promises");
const { resolve } = require("path");

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

    // getInfo(cb){
    //     fs.readFile('./airports.json', (err, buffer)=> {
    //         let data = cb(err, JSON.parse(String(buffer)))
    //         // const data = (JSON.parse(String(buffer)))
    //         // console.log(data)
    //         const airport = data.find(metaData => metaData.iata===this.name)
    //         return airport
    //     })
    // }

    getInfo(cb){
        return new Promise((res, rej) => {
            fs.readFile('./airports.json', (err, data) => {
                if(err) return rej (err)
                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports)
                .filter(airportCode => airports[airportCode].iata === this.name)
                .map(airportCode => airports[airportCode])
                res(airport)
            })
        })
    }
}

module.exports = Airport