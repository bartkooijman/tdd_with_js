const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

const test = {
  value: 100,
  testFunction: function() {
    return this.value;
  }
};


const getValue = obj.getValue;
console.log(getValue()); // Outputs: undefined

console.log(test.testFunction()); // Outputs: undefined