const Bag = require('./Bag')
const Person = require('./Person')

describe("person", () => {
    test("passenger has a name", () => {
        const passenger = new Person.Passenger("Isabella")
        expect(passenger.name).toBe("Isabella")
    })
    test("passenger can have bags", () => {
        const bag = new Bag(12)
        const passenger = new Person.Passenger("Isabella")
        passenger.addBag(bag)
        expect(passenger.bags).toContainEqual(bag)
    })
    test("passenger can call attendant", () => {
        const passenger = new Person.Passenger("Isabella")
        expect(passenger.callAttendant("Can I please have a Gin & Tonic?")).toBe("Can I please have a Gin & Tonic?")
    })
    test("crew has a name", () => {
        const crew = new Person.Crew("Ash")
        expect(crew.name).toBe("Ash")
    })
    test("crew can have bags", () => {
        const bag = new Bag(12)
        const crew = new Person.Crew("Ash")
        crew.addBag(bag)
        expect(crew.bags).toContainEqual(bag)
    })
})