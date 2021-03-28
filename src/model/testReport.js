const TestSuite = require('./testSuite');
const Status = require('./status');

class TestReport {
  constructor() {
    this.testSuites = [];
    this.status = new Status();
  }

  addTestCase(testCase) {
    this.testSuites[this.testSuites.length - 1].addTestCase(testCase);
  }
  addDescription(description) {
    console.log(this.testSuites);
    this.testSuites[this.testSuites.length - 1].addDescription(description);
  }

  addTestSuite(testSuite) {
    this.testSuites.push(testSuite);
  }

  getTotalSuites() {
    return this.testSuites.length;
  }

  getPassedSuites() {
    console.log(this.testSuites);
    return this.testSuites.filter((suite) => suite.isPassed()).length;
  }

  getTotalTestCases() {
    return this.testSuites.reduce((count, testSuite) => {
      return count + testSuite.getTotalTestCases();
    }, 0);
  }

  getSuite(index) {
    return this.testSuites[index];
  }

  execute() {
    const startedAt = Date.now();
    this.testSuites.forEach((testSuite) => testSuite.execute());
    this.elapsed = Date.now() - startedAt;
    this.updateStatus();
  }

  getExcutionTime() {
    return this.elapsed;
  }

  updateStatus() {
    if (this.testSuites.every((testSuite) => testSuite.isPassed())) {
      this.status.pass();
    } else {
      this.status.fail();
    }
  }

  getSkippedCount() {
    return this.testSuites
      .map((testSuite) => testSuite.getSkippedCount())
      .reduce((a, b) => a + b, 0);
  }

  getPassedCount() {
    return this.testSuites
      .map((testSuite) => testSuite.getPassedCount())
      .reduce((a, b) => a + b, 0);
  }

  getTotalCount() {
    return this.testSuites
      .map((testSuite) => testSuite.getTotalCount())
      .reduce((a, b) => a + b, 0);
  }

  isPassed() {
    return this.status.isPassed();
  }

  getStatus() {
    return this.status;
  }
}

module.exports = TestReport;
