const fileName = process.argv[2];
const {test, expect, getPassedCount, getTotalCount} = require('./core');

const runTest = (fileName) => {
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

function getTestResult() {
  let output = ''
  output += `PASS ${fileName}\n`
  output += `Tests: ${(getPassedCount())} passed, ${getTotalCount()} total`
  return output;
}

try {
  runTest(fileName);
  let output = getTestResult();
  console.log(output)
} catch (e) {
  console.log("ERROR");
}
