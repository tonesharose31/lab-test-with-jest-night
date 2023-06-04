
const concessions = require("../data/concessions.js") 

const  { getConcessionByID } = require("../src/concessions.js");
describe("getConcessionByID()",() => {
    test("should return the concession object with the matching ID",() => {
        const id = "g9sZdG1hI";
        const actual = getConcessionByID(concessions, id);
        const expected = {
            id: "g9sZdG1hI",
            name: "Small Popcorn",
            priceInCents:929,
        };
        expect (actual) .toEqual(expected)
    })
    test("should return null if no object is found", () => {
        const id = "noID";
        const actual = getConcessionByID(concessions, id);
        const expected = null;
        expect (actual) .toEqual(expected)
    })
});

const {calculateTotalFromIDs } = require("../src/concessions.js");
describe("calculateTotalFromIDs()", () => {
   test("should calculate the total amount of all concessions from the 'ids' array", () => {
        const ids = ["KzWBehRAD", "rNVCeVsri"];
        const total = calculateTotalFromIDs(concessions, ids); expect(total).toBe(1268)
    })
   test("should return 0 if no concessions are found", () => {
        const ids = ["non", "existant"];
        const total = calculateTotalFromIDs(concessions, ids); expect(total).toBe(0)
    })
})