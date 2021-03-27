const TestSuite = require('../src/testSuite');
const TestCase = require('../src/testCase');
const Description = require('../src/description');
const vm = require('vm');
class Context {
  create() {
    const obj = {
      testSuite: new TestSuite(),
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
    callback(description);
  }

  test(name, callback) {
    const testCase = new TestCase(name, callback);
    this.context.testSuite.addTestCase(testCase);
  }
}

module.exports = Context;
