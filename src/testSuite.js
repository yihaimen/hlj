class TestSuite {
  constructor(path, children) {
    this.path = path;
    this.status = '';
    this.descriptions = [];
    this.children = children;
  }

  addChild(child) {
    this.children.push(child);
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
    return this.children.reduce((count, child) => {
      if (!child.children) {
        return count + 1;
      }
      return count + child.getTotalTestCases();
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

  getChild(index) {
    return this.children[index];
  }

  setPath(path) {
    this.path = path;
  }
}

module.exports = TestSuite;
