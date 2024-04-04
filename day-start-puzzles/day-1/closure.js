function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();

console.log("the result of closureExample() is: ");
closureExample();
console.log("the result of outerFunction()() is: ");
outerFunction()();
console.log("the result of outerFunction() is: ");
outerFunction();
