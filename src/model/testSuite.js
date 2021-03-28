class TestSuite {
  constructor(path, children) {
    this.path = path;
    this.status = '';
    this.descriptions = [];
    this.children = children;
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

  getPath() {
    return this.path;
  }

  getChild(index) {
    return this.children[index];
  }

  setPath(path) {
    this.path = path;
  }
}

module.exports = TestSuite;
