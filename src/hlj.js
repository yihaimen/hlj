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
const testMethod = process.argv[3];
const {
  it,
  test,
  describe,
  getPassedCount,
  getFailedCount,
  getSkippedCount,
  getTotalCount,
  getTestCaseResults,
} = require('./core');

const { expect } = require('./matcher');

const runTest = (path, testMethod) => {
  global.test = test;
  global.it = it;
  global.expect = expect;
  global.describe = describe;
  global.testMethod = testMethod;

  const fullPath = process.cwd() + '/' + path;
  requireTestFile(fullPath);
};

const requireTestFile = (path) => {
  if (isDir(path)) {
    const fileNames = fs.readdirSync(path);
    const testFiles = fileNames.filter((fileName) => isTestFile(fileName));
    testFiles.forEach((fileName) => {
      require(path + '/' + fileName);
    });

    const childDirs = fileNames.filter((fileName) => !fileName.endsWith('.js'));
    childDirs.forEach((dir) => {
      requireTestFile(path + '/' + dir);
    });
  } else {
    require(path);
  }
};

function isDir(fileName) {
  return fs.lstatSync(fileName).isDirectory();
}

const isTestFile = (fileName) => {
  return fileName.endsWith('.test.js');
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

const getPassedCountString = () => {
  if (getPassedCount() === 0) return '';
  return `${getSuccessfulReport(getPassedCount() + ' passed')}, `;
};

const getSkippedCountString = () => {
  if (getSkippedCount() === 0) return '';
  return `${getSkippedCount() + ' skipped'}, `;
};

const getFailedCountString = () => {
  const failedCount = getFailedCount();
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
Tests: ${getSkippedCountString()}${getFailedCountString()}${getPassedCountString()}${getTotalCount()} total
${getExecutionTime()}`;
};

const startAt = Date.now();
let isPassed;
let testMessage;
try {
  runTest(fileName, testMethod);
  isPassed = true;
} catch (e) {
  isPassed = false;
  testMessage = JSON.parse(e.message);
} finally {
  executionTime = Date.now() - startAt;
  console.log(getTestResult(isPassed, testMessage));
}
