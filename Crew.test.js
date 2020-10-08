const Bag = require('./Bag')
const Crew = require('./Crew')

describe("Crew", () => {
    test("has a name", () => {
        const crew = new Crew("Ash")
        expect(crew.name).toBe("Ash")
    })
    test("can have bags", () => {
        const bag = new Bag(12)
        const crew = new Crew("Ash")
        crew.addBag(bag)
        expect(crew.bags).toContainEqual(bag)
    })
})