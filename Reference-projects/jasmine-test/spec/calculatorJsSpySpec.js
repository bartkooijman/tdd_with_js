describe("Calculator normal js test suite with Spies", function () {
    it("divide 4 with 2 with spy on class method", function () {
        spyOn(Divider.prototype, 'myToBeSpiedDivideFunction')
        let divider = new Divider()
        divider.divide(4, 2)
        expect(Divider.prototype.myToBeSpiedDivideFunction).toHaveBeenCalled()
    })

    it("subtract 2 from 5 with spy on object method", function () {
        spyOn(subtractor, 'myToBeSpiedSubtractFunction')
        subtractor.subtract(5, 2)
        expect(subtractor.myToBeSpiedSubtractFunction).toHaveBeenCalled()
    })

    it("subtract 2 from 5 with more advanced Spy on object method", function () {
        spyOn(subtractor, 'myToBeSpiedSubtractFunction').and.returnValue(42);
        subtractor.subtract(5, 2)
        expect(subtractor.subtract(5, 2)).toBe("5 minus 2 is 42");
    })
})