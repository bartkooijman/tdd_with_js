function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doHomework(name) {
  console.log(`${name} is doing homework...`);
  await delay(Math.random() * 3000); // Random time between 0 and 3 seconds
  console.log(`${name} finished homework!`);
}

async function cleanRoom(name) {
  console.log(`${name} is cleaning room...`);
  await delay(Math.random() * 4000); // Random time between 0 and 4 seconds
  console.log(`${name} finished cleaning room!`);
}

async function askMom(name) {
  console.log(`${name} is asking mom if she's done...`);
  await delay(Math.random() * 2000); // Random time between 0 and 2 seconds
  console.log(`${name} finished asking mom!`);
}

// Chain of chores
const siblings = ["Jane", "John", "Mary"];
siblings.forEach(async (name) => {
  try {
    await doHomework(name);
    await cleanRoom(name);
    await askMom(name);
    console.log(`${name} completed all her chores!`);
  } catch (error) {
    console.error(error);
  }
});
