/*
This is an ES6 module containing Jasmine test suites. Given the extension
mjs Jasmine understands that the file contains a module and that it needs
to be loaded by the Jasmine browser runner as such.
*/

/* 
This is how you can load the exported add function from the calculator
module into this test module. If this test module would not have the .mjs
extension it would not load properly. Also the __src__ is a Jasmine browser
runner specific to link to the calculator.mjs file.
*/
import { add } from "../src/modules/caclulator.mjs"

//This is a simple test suite testing if true equals true. No use of the module
describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true)
  })
})

describe("Calculator module test suite", function () {
  it("adds 1 plus 1 using the add function of the module", function () {
    expect(add(1, 1)).toBe(2)
  })

  //Similar to the above test but a bit easier to debug
  it("adds 2 plus 2 using the add function of the module", function () {
    let result = add(2, 2)
    expect(result).toBe(4)
  })
})