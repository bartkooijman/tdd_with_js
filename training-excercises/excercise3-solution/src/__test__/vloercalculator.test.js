const { aantalPakketten } = require("../vloercalculator.js")

const oppervlaktePerPakMck = jest.fn(x => 2.69)

describe("Vloer calculator suite", () => {
  test("Aantal pakketten voor een vloer van 4 bij 5 meter voor product eiken laminaat met artikelnummer 12345 is 8", () => {
    expect(aantalPakketten(4,5, 12345, oppervlaktePerPakMck)).toBe(8)
    expect(oppervlaktePerPakMck.mock.calls.length).toBe(1)
    expect(oppervlaktePerPakMck).toHaveBeenCalledWith(12345)
  })
})
