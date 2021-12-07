describe("Calculator normal js test suite", function () {
  it("picks up pi equaling 3.14", function () {
    expect(pi).toBe(3.14)
  })

  it("divide 4 with 2 using Divider class", function () {
    const divider = new Divider()
    expect(divider.divide(4, 2)).toBe(`4 gedeeld door 2 is 2`)
  })

  it("subtract 2 from 5", function () {
    expect(subtractor.subtract(5, 2)).toBe("5 minus 2 is 3")
  })
})