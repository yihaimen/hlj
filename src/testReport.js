const TestSuite = require('./testSuite');

class TestReport {
  constructor() {
    this.testSuites = [];
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
}

module.exports = TestReport;
