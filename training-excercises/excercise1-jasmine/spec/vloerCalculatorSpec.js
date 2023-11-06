describe("Vloer calculator voor Laminaat test suite", function () {
  it("Calculates number of packages needed for room of 10 by 10", function () {
    spyOn(window, "getSquareMeterPerPackage").and.returnValue(2.69);
    expect(numberOfPackages(10, 10)).toBe(38);
  });

  it("Calculates number of packages needed for room of 10 by 5", function () {
    spyOn(window, "getSquareMeterPerPackage").and.returnValue(2.69);
    expect(numberOfPackages(10, 5)).toBe(19);
  });
});
