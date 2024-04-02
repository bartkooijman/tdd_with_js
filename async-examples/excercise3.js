function doHomework(name, callback) {
  console.log(`${name} is doing homework...`);
  setTimeout(function () {
    console.log(`${name} finished homework!`);
    callback();
  }, Math.random() * 3000); // Random time between 0 and 3 seconds
}

function cleanRoom(name, callback) {
  console.log(`${name} is cleaning room...`);
  setTimeout(function () {
    console.log(`${name} finished cleaning room!`);
    callback();
  }, Math.random() * 4000); // Random time between 0 and 4 seconds
}

function askMom(name, callback) {
  console.log(`${name} is asking mom if she's done...`);
  setTimeout(function () {
    console.log(`${name} finished asking mom!`);
    callback();
  }, Math.random() * 2000); // Random time between 0 and 2 seconds
}

// Chain of chores
const siblings = ["Jane", "John", "Mary"];
siblings.forEach((name, index) => {
  doHomework(name, function () {
    cleanRoom(name, function () {
      askMom(name, function () {
        console.log(`${name} completed all her chores!`);
      });
    });
  });
});
