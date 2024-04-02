function doHomework(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} is doing homework...`);
    setTimeout(() => {
      console.log(`${name} finished homework!`);
      resolve();
    }, Math.random() * 3000); // Random time between 0 and 3 seconds
  });
}

function cleanRoom(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} is cleaning room...`);
    setTimeout(() => {
      console.log(`${name} finished cleaning room!`);
      resolve();
    }, Math.random() * 4000); // Random time between 0 and 4 seconds
  });
}

function askMom(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} is asking mom if she's done...`);
    setTimeout(() => {
      console.log(`${name} finished asking mom!`);
      resolve();
    }, Math.random() * 2000); // Random time between 0 and 2 seconds
  });
}

// Chain of chores
const siblings = ["Jane", "John", "Mary"];
siblings.forEach((name, index) => {
  doHomework(name)
    .then(() => cleanRoom(name))
    .then(() => askMom(name))
    .then(() => {
      console.log(`${name} completed all her chores!`);
    })
    .catch((error) => {
      console.error(error);
    });
});
