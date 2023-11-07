class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this.result;
  }
}

describe('Calculator', () => {
  let calculator = new Calculator();

  test('add 1', () => {
    const result = calculator.add(1);
    expect(result).toBe(1);
  });

  test('add 2', () => {
    const result = calculator.add(2);
    expect(result).toBe(2);
  });
});
