function appMethod() {
  const testing = true;
  return testing ? "test result" : "production result";
}

module.exports = { appMethod }