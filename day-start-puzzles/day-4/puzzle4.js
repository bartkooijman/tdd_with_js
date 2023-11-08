function createFunction(x) {
  return function(y) {
      return x + y;
  }
}
var myFunc = createFunction(10);
console.log(myFunc(20));

console.log(createFunction(20)(20));