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
console.log(getValue()); // what is the result?

console.log(test.testFunction()); // what is the result?

const getValue2 = obj.getValue.bind(obj);
console.log(getValue2()); // what is the result?