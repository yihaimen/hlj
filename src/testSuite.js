class TestSuite {
  constructor() {
    this.status = '';
    this.descriptions = [];
  }

  addDescription(description) {
    this.descriptions.push(description);
  }

  isPassed() {
    return this.status === 'pass';
  }

  setStatus(status) {
    this.status = status;
  }

  getTotalTestCases() {
    return this.descriptions.reduce((count, description) => {
      return count + description.getTotalTestCases();
    }, 0);
  }

  addTestCase(testCase) {
    this.descriptions[this.descriptions.length - 1].addTestCase(testCase);
  }
}

module.exports = TestSuite;
