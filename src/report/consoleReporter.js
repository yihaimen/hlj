const { pass, fail, skip, green, red, yellow, time } = require('./render');

const { TEST_RESULT } = require('./constant');

class ConsoleReporter {
  constructor(workingDir, testReport) {
    this.workingDir = workingDir;
    this.testReport = testReport;
  }

  render() {
    let result = '';
    result += this.suiteResult();
    result += this.suiteStatistics();
    result += this.testCaseStatistics();
    result += this.excutionTime();
    return result;
  }

  suiteStatistics() {
    return '';
  }

  testCaseStatistics() {
    const totalCount = this.testReport.getTotalCount();
    const passedCount = this.testReport.getPassedCount();
    const skippedCount = this.testReport.getSkippedCount();
    const failedCount = totalCount - passedCount - skippedCount;

    return `Tests: ${this.getSkippedCountString(
      skippedCount
    )}${this.getFailedCountString(failedCount)}${this.getPassedCountString(
      passedCount
    )}${totalCount} total\n`;
  }

  excutionTime() {
    return `Time: ${time(this.testReport.getExcutionTime() / 1000)}`;
  }

  suiteResult() {
    return this.testReport.testSuites
      .map((testSuite) => this.formatTestSuite(testSuite))
      .join('\n');
  }

  formatTestSuite(testSuite) {
    const childrenResult = testSuite.children
      .map((child) => this.formatChild(child))
      .join('\n');

    return `${this.renderByStatus(testSuite)} ${testSuite
      .getPath()
      .replace(this.workingDir, '')}\n${childrenResult}\n`;
  }

  formatChild(child) {
    if (child.children) {
      return child.children.map((c) => this.formatChild(c)).join('\n');
    }

    return this.formatTestCase(child);
  }

  formatTestCase(testCase) {
    if (testCase.getStatus().isSkipped()) {
      return '';
    }

    const icon = testCase.getStatus().isPassed()
      ? green(TEST_RESULT.PASS)
      : red(TEST_RESULT.FAIL);
    const title = '  ' + icon + ' ' + testCase.name;
    const diff = this.getDiffMessage(testCase);
    return title + diff;
  }

  formatTestResult(testCaseResults) {
    testCaseResults
      .map(
        (testCase) =>
          `  ${
            testCase.isPassed
              ? this.getSuccessfulReport(TEST_RESULT.PASS)
              : this.getFailedReport(TEST_RESULT.FAIL)
          } ${testCase.name}`
      )
      .join('\n');
  }

  getPassedCountString(passedCount) {
    if (passedCount === 0) return '';
    return `${green(passedCount + ' passed')}, `;
  }

  getSkippedCountString(count) {
    if (count === 0) return '';
    return `${yellow(count + ' skipped')}, `;
  }

  getFailedCountString(failedCount) {
    if (failedCount === 0) {
      return '';
    }

    return `${red(failedCount + ' failed')}, `;
  }

  getDiffMessage(testCase) {
    if (testCase.isPassed()) {
      return '';
    }

    return `\n  Expected: ${green(testCase.getExpected())}\n  Received: ${red(
      testCase.getReceived()
    )}`;
  }

  renderByStatus(testSuite) {
    if (testSuite.isPassed()) {
      return pass('PASS');
    }

    return fail('FAIL');
  }
}
module.exports = ConsoleReporter;
