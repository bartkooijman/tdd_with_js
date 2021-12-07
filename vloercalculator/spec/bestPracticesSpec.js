//Speak Human
//Bad:
// Output: "Array adds to the end"
describe('Array', function() {
  it('adds to the end', function() {
    var initialArray = [1];
    initialArray.push(2);
    expect(initialArray).toEqual([1, 2]);
  });
});
//Better:
// Output: "Array.prototype .push(x) appends x to the end of the Array"
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    it('appends x to the end of the Array', function() {
      var initialArray = [1];
      initialArray.push(2);
      expect(initialArray).toEqual([1, 2]);
    });
  });
});

//Single responsibility principle
//A test can fail for only one reason
//Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    it('appends x to the end of the Array and returns it', function() {
      var initialArray = [1];
      expect(initialArray.push(2)).toBe(2);
      expect(initialArray).toEqual([1, 2]);
    });
  });
});

//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    it('appends x to the end of the Array', function() {
      var initialArray = [1];
      initialArray.push(2);
      expect(initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      var initialArray = [1];
      expect(initialArray.push(2)).toBe(2);
    });
  });
});

//Arrange-Act-Assert
//Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    it('appends x to the end of the Array', function() {
      var initialArray = [1];
      initialArray.push(2);
      expect(initialArray).toEqual([1, 2]);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    var initialArray;

    beforeEach(function() {
      initialArray = [1]; // Arrange

      initialArray.push(2); // Act
    });

    it('appends x to the end of the Array', function() {
      expect(initialArray).toEqual([1, 2]); // Assert
    });
  });
});

// Don't Repeat Yourself
// Use before/after blocks to DRY up repeated setup, teardown, and action code.
// Keeps test suite more concise and readable
// Changes only need to be made in one place
// Unit tests are not exempt from coding best practices
// Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    it('appends x to the end of the Array', function() {
      var initialArray = [1];
      initialArray.push(2);
      expect(initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      var initialArray = [1];
      expect(initialArray.push(2)).toBe(2);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    var initialArray,
        pushResult;

    beforeEach(function() {
      initialArray = [1];

      pushResult = initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      expect(pushResult).toBe(2);
    });
  });
});

// this Is How We Do It
// Use this to share variables between it and before/after blocks.
// Declare and initialize variables on one line
// Jasmine automatically cleans the this object between specs to avoid state leak
// Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    var initialArray,
        pushResult;

    beforeEach(function() {
      initialArray = [1];

      pushResult = initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      expect(pushResult).toBe(2);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    beforeEach(function() {
      this.initialArray = [1];

      this.pushResult = this.initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(this.initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      expect(this.pushResult).toBe(2);
    });
  });
});

// Avoid the Alls
// Prefer beforeEach/afterEach blocks over beforeAll/afterAll ones. The latter are not reset between tests.
// Avoids accidental state leak
// Enforces test independence
// Order of All block execution relative to Each ones is not always obvious
// (very) Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    beforeAll(function() {
      this.initialArray = [1];
    });

    beforeEach(function() {
      this.pushResult = this.initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(this.initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      expect(this.pushResult).toBe(3);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    beforeEach(function() {
      this.initialArray = [1];

      this.pushResult = this.initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(this.initialArray).toEqual([1, 2]);
    });

    it('returns x', function() {
      expect(this.pushResult).toBe(2);
    });
  });
});

// Be describetive
// Nest describe blocks liberally to create functional subsets.
// Allows tests to build on each other from least to most specific
// Creates tests that are easy to extend and/or refactor
// Makes branch testing easier and less repetitive
// Encapsulates tests based on their common denominator
// Bad:
describe('Array.prototype', function() {
  describe('.push(x) on an empty Array', function() {
    beforeEach(function() {
      this.initialArray = [];

      this.initialArray.push(1);
    });

    it('appends x to the Array', function() {
      expect(this.initialArray).toEqual([1]);
    });
  });

  describe('.push(x) on a non-empty Array', function() {
    beforeEach(function() {
      this.initialArray = [1];

      this.initialArray.push(2);
    });

    it('appends x to the end of the Array', function() {
      expect(this.initialArray).toEqual([1, 2]);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    describe('on an empty Array', function() {
      beforeEach(function() {
        this.initialArray = [];

        this.initialArray.push(1);
      });

      it('appends x to the Array', function() {
        expect(this.initialArray).toEqual([1]);
      });
    });

    describe('on a non-empty Array', function() {
      beforeEach(function() {
        this.initialArray = [1];

        this.initialArray.push(2);
      });

      it('appends x to the end of the Array', function() {
        expect(this.initialArray).toEqual([1, 2]);
      });
    });
  });
});

// Write Minimum Passable Tests
// If appropriate, use Jasmine's built-in matchers (such as toContain, jasmine.any, jasmine.stringMatching, ...etc) to compare arguments and results. You can also create your own matcher via the asymmetricMatch function.
// Tests become more resilient to future changes in the codebase
// Closer to testing behavior over implementation
// Bad:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    beforeEach(function() {
      this.initialArray = [];

      this.initialArray.push(1);
    });

    it('appends x to the Array', function() {
      expect(this.initialArray).toEqual([1]);
    });
  });
});
//Better:
describe('Array.prototype', function() {
  describe('.push(x)', function() {
    beforeEach(function() {
      this.initialArray = [];

      this.initialArray.push(1);
    });

    it('appends x to the Array', function() {
      expect(this.initialArray).toContain(1);
    });
  });
});