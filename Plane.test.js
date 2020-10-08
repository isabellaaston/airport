const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe("Plane", () => {
    test("has a capacity", () => {
        const plane = new Plane(2, 5, "MAD")
        expect(plane.crewCapacity).toBe(2)
        expect(plane.passengerCapacity).toBe(5)
    })
    test("can have passengers", () => {
        const passenger = new Passenger("Isabella")
        const plane = new Plane(4, 25, "MAD")
        plane.boardPlane(passenger)
        expect(plane.passengers).toContainEqual(passenger)
    })
    test("can't have more passengers than capacity", () => {
        const plane = new Plane(1, 2, "MAD")
        const passengerA = new Passenger("Isabella")
        const passengerB = new Passenger("Matt")
        const passengerC = new Passenger("Kanye")
        plane.boardPlane(passengerA)
        plane.boardPlane(passengerB)
        expect(()=> plane.boardPlane(passengerC)).toThrowError("plane is full")
    })
})