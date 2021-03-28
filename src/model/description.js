class Description {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  getTotalTestCases() {
    return this.children.reduce((count, child) => {
      if (!child.children) {
        return count + 1;
      }
      return count + child.getTotalTestCases();
    }, 0);
  }

  setChildren(children) {
    this.children = children;
  }

  getName() {
    return this.name;
  }

  getChild(index) {
    return this.children[index];
  }

  execute() {
    this.children.forEach((child) => child.execute());
  }

  isPassed() {
    return this.children.every((child) => child.isPassed());
  }

  getPassedCount() {
    return this.children
      .map((child) => child.getPassedCount())
      .reduce((a, b) => a + b, 0);
  }

  getTotalCount() {
    return this.children
      .map((child) => child.getTotalCount())
      .reduce((a, b) => a + b, 0);
  }

  getSkippedCount() {
    return this.children
      .map((child) => child.getSkippedCount())
      .reduce((a, b) => a + b, 0);
  }
}

module.exports = Description;
