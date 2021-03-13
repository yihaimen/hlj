const fileName = process.argv[2];
const {test, expect, getPassedCount, getTotalCount, getTestCaseResults} = require('./core');

const runTest = (fileName) => {
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

function getTestResult(isPassed) {
  let output = ''
  output += isPassed ? 'PASS' : 'ERROR'
  output += ` ${fileName}\n`
  output += `${getTestCaseResults()}\n`
  output += `Tests: ${(getPassedCount())} passed, ${getTotalCount()} total`
  return output;
}

try {
  runTest(fileName);
  console.log(getTestResult(true))
} catch (e) {
  console.log(getTestResult(false))
}
