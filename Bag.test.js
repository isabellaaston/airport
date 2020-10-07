const Bag = require('./Bag')

describe("Bag", () => {
    test("has a weight", () => {
        const bag = new Bag(10)
        expect(bag.weight).toBe(10)
    })
    test("has a weight", () => {
        expect(() => new Bag()).toThrowError("must have weight")
    })
})