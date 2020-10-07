const Plane = require('./Plane')
const Airport = require('./Airport')

describe("Airport", () => {
    test("in a city", () => {
        const airport = new Airport("Madrid", 10)
        expect(airport.city).toBe("Madrid")
        expect(() => new Airport(10)).toThrowError("missing city or capacity")
    })
    test("has a capacity", () => {
        const airport = new Airport("Madrid", 10)
        expect(airport.capacity).toBe(10)
        expect(() => new Airport("Madrid")).toThrowError("missing city or capacity")
    })
    test("can't land more planes than capacity", () => {
        const airport = new Airport("Madrid", 1)
        const planeA = new Plane(100)
        const planeB = new Plane(200)
        airport.landPlane(planeA)
        expect(()=> airport.landPlane(planeB)).toThrowError("Airport has no landing space")
    })
})