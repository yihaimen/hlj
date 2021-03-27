const TestSuite = require('../src/testSuite');
const TestCase = require('../src/testCase');
const Description = require('../src/description');
const vm = require('vm');
const callee = require('callee');
class Context {
  create() {
    const defaultDescription = new Description('');
    const testSuite = new TestSuite();
    testSuite.addDescription(defaultDescription);

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
    this.context.testSuite.addDescription(description);

    this.context.descriptions.unshift(description);
    callback();
    this.context.descriptions.shift();
  }

  test(name, callback) {
    const testCase = new TestCase(name, callback);
    this.context.descriptions[0].addChild(testCase);
  }
}

module.exports = Context;
