class Description {
  constructor() {
    this.testCases = [];
  }

  getTotalTestCases() {
    return this.testCases.length;
  }

  addTestCase(testCase) {
    this.testCases.push(testCase);
  }
}

module.exports = Description;
