//"use strict";

function showThis() {
  console.log(this.Math.PI);
}

//what is the result of calling showThis()?
showThis();

function foo(val1, val2, val1){
  console.log(val1, val2, val1);
}

foo(1, 2, 3);