const fileName = process.argv[2];
const {test, expect, getPassedCount, getTotalCount, getTestCaseResults} = require('./core');

const runTest = (fileName) => {
  global.test = test;
  global.expect = expect;
  require("../" + fileName);
};

const formatTestResult = testCaseResults =>
    testCaseResults.map(testCase => `  ${testCase.isPassed ? '✓' : '✕'} ${testCase.name}`).join("\n");

const getFailedCountString = () => {
  const failedCount = getTotalCount() - getPassedCount();
  if (failedCount === 0) {
    return "";
  }

  return `${failedCount} failed, `;
};

const getTestResult = isPassed => {
  let output = ''
  output += isPassed ? 'PASS' : 'FAIL'
  output += ` ${fileName}\n`
  output += `${formatTestResult(getTestCaseResults())}\n`
  output += `Tests: `;
  output += getFailedCountString();
  output += `${(getPassedCount())} passed, ${getTotalCount()} total`
  return output;
};

try {
  runTest(fileName);
  console.log(getTestResult(true))
} catch (e) {
  console.log(getTestResult(false))
}
