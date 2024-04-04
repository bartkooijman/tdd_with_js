function doHomework(callback) {
  console.log("Jane is doing her homework...");
  setTimeout(function() {
    console.log("Jane finished her homework!");
    callback();
  }, Math.random() * 3000); // Random time between 0 and 3 seconds
}

function cleanRoom(callback) {
  console.log("Jane is cleaning her room...");
  setTimeout(function() {
    console.log("Jane finished cleaning her room!");
    callback();
  }, Math.random() * 4000); // Random time between 0 and 4 seconds
}

function askMom(callback) {
  console.log("Jane is asking her mom if she's done...");
  setTimeout(function() {
    console.log("Jane finished asking her mom!");
    callback();
  }, Math.random() * 2000); // Random time between 0 and 2 seconds
}

// Chain of chores
doHomework(function() {
  cleanRoom(function() {
    askMom(function() {
      console.log("Jane completed all her chores!");
    });
  });
});
