const { aantalPakketten } = require("../vloercalculator.js")

describe("Vloer calculator suite", () => {
  test("Aantal pakketten voor een vloer van 4 bij 5 meter voor product eiken laminaat met artikelnummer 12345 is 8", async () => {
    expect(await aantalPakketten(4,5, 12345)).toBe(8)
  })
})
