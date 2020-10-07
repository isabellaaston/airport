const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe("Passenger", () => {
    test("has a name", () => {
        const passenger = new Passenger("Isabella")
        expect(passenger.name).toBe("Isabella")
    })
    test("can have bags", () => {
        const bag = new Bag(12)
        const passenger = new Passenger("Isabella")
        passenger.addBag(bag)
        expect(passenger.bags).toContainEqual(bag)
    })
})