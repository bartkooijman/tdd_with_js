const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const numberOfPackages = require("../../src/floorCaclulator.js");

Given(
  "a product with {float} square meter per package",
  function (squareMetersPerPackage) {
    this.squareMetersPerPackage = squareMetersPerPackage;
  }
);

When(
  "calculate the number of packages needed for {float} by {float} meters",
  function (length, width) {
    this.variable = numberOfPackages.numberOfPackages(
      length,
      width,
      this.squareMetersPerPackage
    );
  }
);

Then("the number of packages should be {int}", function (nuberOfPackages) {
  assert.equal(this.variable, nuberOfPackages);
});
