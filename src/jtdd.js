const fileName = process.argv[2];
const {test, expect, getPassedCount, getTotalCount} = require('./core');

const runTest = (fileName) => {
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

try {
  runTest(fileName);
  console.log(`PASS ${fileName}`);
  console.log(`Tests: ${(getPassedCount())} passed, ${getTotalCount()} total`)
} catch (e) {
  console.log("ERROR");
}
