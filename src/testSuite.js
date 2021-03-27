class TestSuite {
  constructor(path) {
    this.path = path;
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

  getPath() {
    return this.path;
  }

  getDescription(index) {
    return this.descriptions[index];
  }

  setPath(path) {
    this.path =  path;
  }
}

module.exports = TestSuite;
