class Description {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  getTotalTestCases() {
    return this.children.length;
  }

  addChild(testCase) {
    this.children.push(testCase);
  }

  getName() {
    return this.name;
  }

  getChild(index) {
    return this.children[index];
  }
}

module.exports = Description;
