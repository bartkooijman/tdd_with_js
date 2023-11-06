function outerFunction() {
  let outerVariable = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();

closureExample();

outerFunction()();

outerFunction();
