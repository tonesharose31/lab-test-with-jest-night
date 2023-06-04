const {  getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js")

const tickets = require("../data/tickets.js");

describe("getTicketByName()",() => {
    test("should return the ticket object when given the name",() => {
        const name = "Adult Matinee";
        const actual = getTicketByName(tickets, name);
        const expected = {
            id: "6ha0u__54",
            name: "Adult Matinee",
            priceInCents:949,
        };
        expect (actual) .toEqual(expected)
    })
 
    test("should return null if no object is found", () => {
        const name = "invalidID";
        const actual = getTicketByName(tickets, name);
        const expected = null;
        expect (actual) .toEqual(expected)
    })
});

describe("calculateTotalFromTicketNames()", () => {
    test("should calculate the total value of all tickets included in the 'names' array", () => {
        const names = ["Child Regular", "Adult Regular"];
        const total = calculateTotalFromTicketNames(tickets, names); expect(total).toBe(2438)
    })
    test("should return 0 if no concessions are found", () => {
        const names = ["non", "existant"];
        const total = calculateTotalFromTicketNames(tickets, names); expect(total).toBe(0)
    })
})