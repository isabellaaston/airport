const Plane = require('./Plane')
const Airport = require('./Airport')

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
})