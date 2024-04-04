function asyncOperation() {
  setTimeout(() => console.log('Async Operation'), 1000);
}

function synchronousOperation() {
  console.log('Synchronous Operation');
}

async function executeOperations() {
  console.log('Start');

  await asyncOperation();

  synchronousOperation();

  console.log('End');
}

executeOperations();
