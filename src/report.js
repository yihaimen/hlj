const {
  getSuccessfulSuite,
  getFailedSuite,
  getSuccessfulReport,
  getFailedReport,
  getTestElapsed,
} = require('./render');

const { TEST_RESULT } = require('./constant');
const {
  getPassedCount,
  getFailedCount,
  getSkippedCount,
  getTotalCount,
  getTestCaseResults,
} = require('./core');

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

const getExecutionTime = (executionTime) =>
  `Time: ${getTestElapsed(executionTime / 1000)}`;

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

const getTestResult = (fileName, isPassed, testMessage = {}, executionTime) => {
  return `${renderByStatus(isPassed)}${fileName}
${formatTestResult(getTestCaseResults())}${getDiffMessage(
    isPassed,
    testMessage
  )}
Tests: ${getSkippedCountString()}${getFailedCountString()}${getPassedCountString()}${getTotalCount()} total
${getExecutionTime(executionTime)}`;
};

module.exports = { getTestResult };
