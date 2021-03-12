const fileName = process.argv[2];

const runTest = (fileName) => {
  const {test, expect} = require('./core');
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

// const test = (name, callback) => {};

try {
  runTest(fileName);
  console.log("PASS");
} catch (e) {
  console.log("ERROR");
}
