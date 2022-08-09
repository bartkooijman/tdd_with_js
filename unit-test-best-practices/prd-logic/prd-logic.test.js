const { appMethod } = require("./app.js")

test("if (testing) { return testData } else { return productionData }", () => {
  expect(appMethod()).toBe("test result");
});
