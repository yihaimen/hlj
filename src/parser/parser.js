const TestReport = require('../model/testReport');
const Context = require('./context');
const fs = require('fs');
const vm = require('vm');

class Parser {
  parse(files) {
    const testReport = new TestReport();
    files
      .map((fileName) => {
        return this.parseFile(fileName);
      })
      .forEach((testSuite) => {
        testReport.addTestSuite(testSuite);
      });
    return testReport;
  }

  parseFile(fileName) {
    const script = new vm.Script(fs.readFileSync(fileName));
    const context = new Context(fileName).create();
    script.runInContext(context);
    const testSuite = context.testSuite;
    testSuite.setPath(fileName);
    return testSuite;
  }
}

module.exports = Parser;
