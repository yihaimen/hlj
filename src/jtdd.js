const fileName = process.argv[2];
const {test, expect, getPassedCount} = require('./core');

const runTest = (fileName) => {
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

try {
  runTest(fileName);
  console.log("PASS");
  let count = getPassedCount();
  console.log(`Tests: ${count} passed`)
} catch (e) {
  console.log("ERROR");
}
