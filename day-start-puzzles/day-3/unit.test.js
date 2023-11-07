function generateRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

test('Testing the generateRandomNumber function', () => {
  const result1 = generateRandomNumber();
  const result2 = generateRandomNumber();

  expect(result1).not.toBe(result2); //Will the test pass?
});
