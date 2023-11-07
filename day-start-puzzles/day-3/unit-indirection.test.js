class Calculator {
  add(a, b) {
    return a + b;
  }
}

class Logger {
  logResult(result) {
    return `Result: ${result}`;
  }
}

//What is the best way to test the add function of the Calculator class?
test('should add two numbers indirectly', () => {
  const calculator = new Calculator();
  const logger = new Logger();

  const result = logger.logResult(calculator.add(2, 3));

  expect(result).toBe('Result: 5'); // Expecting a specific result based on the indirect interaction
});

test('should add two numbers directly', () => {
  const calculator = new Calculator();

  // Direct interaction with the object under test
  const result = calculator.add(2, 3);

  expect(result).toBe(5); // Expecting a specific result based on the direct interaction
});