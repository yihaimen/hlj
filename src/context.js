const TestSuite = require('../src/testSuite');
const TestCase = require('../src/testCase');
const Description = require('../src/description');
const vm = require('vm');

let tempChildren = [];

class Context {
  create() {
    const defaultDescription = new Description('');
    const testSuite = new TestSuite('', tempChildren);
    // testSuite.addDescription(defaultDescription);

    const obj = {
      descriptions: [defaultDescription],
      testSuite,
      describe: (name, callback) => {
        this.describe(name, callback);
      },
      it: (name, callback) => {
        this.test(name, callback);
      },
    };

    this.context = vm.createContext(obj);
    return this.context;
  }

  describe(name, callback) {
    const description = new Description(name);
    // this.context.testSuite.addDescription(description);
    tempChildren.unshift([]);
    // this.context.descriptions.unshift(description);
    callback();
    description.appendChildren(tempChildren[0]);
    tempChildren.shift();
    tempChildren.unshift(description);
  }

  test(name, callback) {
    const testCase = new TestCase(name, callback);
    tempChildren[0].push(testCase);
  }
}

module.exports = Context;
