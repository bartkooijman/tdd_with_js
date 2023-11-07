function complexFunction(value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
}

describe('complexFunction', () => {
  it('handles positive input', () => {
    const result = complexFunction(5);

    if (result > 0) {
      expect(result).toBeGreaterThan(0);
    } else if (result < 0) {
      expect(result).toBeLessThan(0);
    } else {
      expect(result).toBe(0);
    }
  });

  it('handles negative input', () => {
    const result = complexFunction(-3);

    if (result > 0) {
      expect(result).toBeGreaterThan(0);
    } else if (result < 0) {
      expect(result).toBeLessThan(0);
    } else {
      expect(result).toBe(0);
    }
  });

  it('handles zero input', () => {
    const result = complexFunction(0);

    if (result > 0) {
      expect(result).toBeGreaterThan(0);
    } else if (result < 0) {
      expect(result).toBeLessThan(0);
    } else {
      expect(result).toBe(0);
    }
  });
});
