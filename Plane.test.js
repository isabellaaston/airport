const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe("Plane", () => {
    test("has a capacity", () => {
        const plane = new Plane(5)
        expect(plane.capacity).toBe(5)
    })
    test("can have passengers", () => {
        const passenger = new Passenger("Isabella")
        const plane = new Plane(4)
        plane.boardPlane(passenger)
        expect(plane.passengers).toContainEqual(passenger)
    })
    test("can't have more passengers than capacity", () => {
        const plane = new Plane(1)
        const passengerA = new Passenger("Isabella")
        const passengerB = new Passenger("Matt")
        plane.boardPlane(passengerA)
        expect(()=> plane.boardPlane(passengerB)).toThrowError("plane is full")
    })
})