const TestSuite = require('../model/testSuite');
const TestCase = require('../model/testCase');
const Description = require('../model/description');
const vm = require('vm');

class Context {
  create() {
    const tempChildren = [];
    const testSuite = new TestSuite('', tempChildren);

    const obj = {
      tempChildren,
      testSuite,
      describe: (name, callback) => {
        this.describe(name, callback);
      },
      it: (name, callback) => {
        this.test(name, callback);
      },
      test: (name, callback) => {
        this.test(name, callback);
      },
    };

    this.context = vm.createContext(obj);
    return this.context;
  }

  describe(name, callback) {
    const description = new Description(name);
    const tempChildren = this.context.tempChildren;
    tempChildren.unshift([]);
    callback();
    description.setChildren(tempChildren.shift());
    this.appendToParent(description);
  }

  test(name, callback) {
    const testCase = new TestCase(name, callback);
    this.appendToParent(testCase);
  }

  appendToParent(child) {
    const tempChildren = this.context.tempChildren;
    if (Array.isArray(tempChildren[0])) {
      tempChildren[0].push(child);
    } else {
      tempChildren.push(child);
    }
  }
}

module.exports = Context;
