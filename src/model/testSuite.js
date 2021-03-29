const Status = require('./status');

class TestSuite {
  constructor(path, children) {
    this.path = path;
    this.status = new Status();
    this.descriptions = [];
    this.children = children;
  }

  setStatus(status) {
    this.status = status;
  }

  getTotalCount() {
    return this.children.reduce((count, child) => {
      if (!child.children) {
        return count + 1;
      }
      return count + child.getTotalCount();
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

  execute(testCaseName) {
    this.children.forEach((child) => child.execute(testCaseName));
    this.updateStatus();
  }

  updateStatus() {
    if (this.children.every((child) => child.isPassed())) {
      this.status.pass();
    } else {
      this.status.fail();
    }
  }

  getPassedCount() {
    return this.children
      .map((child) => child.getPassedCount())
      .reduce((a, b) => a + b, 0);
  }

  getSkippedCount() {
    return this.children
      .map((child) => child.getSkippedCount())
      .reduce((a, b) => a + b, 0);
  }

  isPassed() {
    return (
      this.getSkippedCount() + this.getPassedCount() === this.getTotalCount()
    );
  }

  getStatus() {
    return this.status;
  }
}

module.exports = TestSuite;
