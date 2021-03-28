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

  addChild(testCase) {
    this.children.push(testCase);
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
}

module.exports = Description;
