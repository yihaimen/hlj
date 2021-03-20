#!/usr/bin/env node
const fs = require('fs');
const {
  getSuccessfulSuite,
  getFailedSuite,
  getSuccessfulReport,
  getFailedReport,
  getTestElapsed,
} = require('./render');
const { TEST_RESULT } = require('./constant');
const fileName = process.argv[2];
const {
  it,
  test,
  expect,
  describe,
  getPassedCount,
  getTotalCount,
  getTestCaseResults,
} = require('./core');

const runTest = (path) => {
  global.test = test;
  global.it = it;
  global.expect = expect;
  global.describe = describe;

  function isDir(fileName) {
    return fs.lstatSync(fileName).isDirectory();
  }

  if (isDir(path)) {
    let fileNames = fs.readdirSync(path);
    fileNames.forEach((fileName) => {
      require(process.cwd() + '/' + path + fileName);
    });
  } else {
    require(process.cwd() + '/' + path);
  }
};

const formatTestResult = (testCaseResults) =>
  testCaseResults
    .map(
      (testCase) =>
        `  ${
          testCase.isPassed
            ? getSuccessfulReport(TEST_RESULT.PASS)
            : getFailedReport(TEST_RESULT.FAIL)
        } ${testCase.name}`
    )
    .join('\n');

const getPassedCountString = () =>
  `${getSuccessfulReport(getPassedCount() + ' passed')}, `;
const getFailedCountString = () => {
  const failedCount = getTotalCount() - getPassedCount();
  if (failedCount === 0) {
    return '';
  }

  return `${getFailedReport(failedCount + ' failed')}, `;
};

let executionTime = 0;
const getExecutionTime = () => `Time: ${getTestElapsed(executionTime / 1000)}`;

function getDiffMessage(isPassed, testMessage) {
  if (isPassed) {
    return '';
  }

  const { expected, received } = testMessage;

  return `\n  Expected: ${getSuccessfulReport(
    expected
  )}\n  Received: ${getFailedReport(received)}`;
}

const renderByStatus = (
  isPassed,
  passedMessage = 'PASS',
  failedMessage = 'FAIL'
) => {
  return isPassed
    ? `${getSuccessfulSuite(passedMessage)} `
    : `${getFailedSuite(failedMessage)} `;
};

const getTestResult = (isPassed, testMessage = {}) => {
  return `${renderByStatus(isPassed)}${fileName}
${formatTestResult(getTestCaseResults())}${getDiffMessage(
    isPassed,
    testMessage
  )}
Tests: ${getFailedCountString()}${getPassedCountString()}${getTotalCount()} total
${getExecutionTime()}`;
};

const startAt = Date.now();
let isPassed;
let testMessage;
try {
  runTest(fileName);
  isPassed = true;
} catch (e) {
  isPassed = false;
  testMessage = JSON.parse(e.message);
} finally {
  executionTime = Date.now() - startAt;
  console.log(getTestResult(isPassed, testMessage));
}
