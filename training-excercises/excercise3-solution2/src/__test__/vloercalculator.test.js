const { aantalPakketten } = require("../vloercalculator.js")
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe("Vloer calculator suite", () => {
  test("Aantal pakketten voor een vloer van 4 bij 5 meter voor product eiken laminaat met artikelnummer 12345 is 8", async () => {
    fetch.mockResolvedValue({
      OppervlaktePerPak: 2.69
    });

    const result = await aantalPakketten(4,5, 12345);
    
    expect(result).toBe(8)
  })
})
