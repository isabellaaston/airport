const Plane = require('./Plane')
const Airport = require('./Airport')
const Bag = require('./Bag')
const Person = require('./Person')

describe("Airport", () => {
    test("knows other airports", ()=> {
        const LHR = new Airport("LHR")
        const LAX = new Airport("LAX")
        expect(Airport.airports.length).toBe(2)
    })
    test("planes can fly between airports", ()=> {
        const CDG = new Airport("CDG")
        const MAD = new Airport("MAD")
        const plane = new Plane(2, 20, "CDG")
        CDG.planeTakeOff(plane, "MAD")
        expect(CDG.planes.length).toBe(0)
        expect(MAD.planes.length).toBe(1)
    })
    test("has name", () => {
        let airport = Airport.airports[0]
        expect(airport.name).toBe("LHR")
        expect(() => new Airport()).toThrowError("missing name")
    })
    test("airport has a plane that has people with bags", () => {
        const bag1 = new Bag(20)
        const passenger = new Person.Passenger("Pam")
        passenger.addBag(bag1)
        const bag2 = new Bag(5)
        const crew = new Person.Crew("Angela")
        crew.addBag(bag2)
        const plane = new Plane("LHR", 5, 200)
        let airport = Airport.airports[0]
        airport.landPlane(plane)
        plane.boardPlane(passenger)
        plane.boardPlane(crew)
        expect(airport.planes[0].passengers[0].bags[0].weight).toBe(20)
        expect(airport.planes[0].crew[0].bags[0].weight).toBe(5)
    })
    // test("airports have a country", (cb) => {
    //     const BCN = new Airport("BCN")
    //     BCN.getInfo((err, info) => {
    //         console.log(info)
    //         expect(err).toBeNull()
    //         expect(info.country).toEqual("ES")
    //         cb()
    //     })
    // })

    test("airports have a city", async () => {
        const BCN = new Airport("BCN")
        const airport = await BCN.getInfo()
        expect(airport.city).toEqual("Barcelona")
    })

    test("airports have a city", () => {
        const IBZ = new Airport("IBZ")
        return IBZ.getInfo()
        .then(info => {
            expect(info.city).toEqual("Ibiza")
        })
        .catch(err => {
            expect(err).toBeNull()
        })
    })
})