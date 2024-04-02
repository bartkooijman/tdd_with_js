function sleep(timeout, callback) {
  console.log("Sleeping");
  setTimeout(callback, timeout);
}

function work() {
  console.log("Working");
}

function execute() {
  sleep(2000, () => {
    work();
  });
}

execute();
