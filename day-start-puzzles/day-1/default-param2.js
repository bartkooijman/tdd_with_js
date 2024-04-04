function getName() {
  return `Stranger`;
}

function getTom() { 
  return `Tom`;
}

function greet(name = getName()) {
  console.log(`Hello, ${name}!`);
}

greet(); // What will this output?
greet(getTom()); // What will this output?
