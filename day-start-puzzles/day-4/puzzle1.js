//What is the output?
var output = (function(x) {
  delete x;
  return x;
})(0);
console.log(output);


// const test = ((number) => {
//   console.log(number);
// })(1)