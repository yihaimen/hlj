class Description {
  constructor(name) {
    this.name = name;
    this.testCases = [];
  }

  getTotalTestCases() {
    return this.testCases.length;
  }

  addTestCase(testCase) {
    this.testCases.push(testCase);
  }

  getName() {
    return this.name;
  }

  getTestCase(index) {
    return this.testCases[index];
  }
}

module.exports = Description;
