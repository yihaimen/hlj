const TestReport = require('../src/testReport');
const Context = require('../src/context');
const fs = require('fs');
const vm = require('vm');

class Parser {
  parse(files) {
    const testReport = new TestReport();
    const path = process.cwd();
    files
      .map((fileName) => {
        return this.parseFile(path, fileName);
      })
      .forEach((testSuite) => {
        testReport.addTestSuite(testSuite);
      });
    return testReport;
  }

  parseFile(path, fileName) {
    const script = new vm.Script(fs.readFileSync(path + '/' + fileName));
    const context = new Context().create();
    script.runInContext(context);
    const testSuite = context.testSuite;
    testSuite.setPath(fileName);
    return testSuite;
  }
}

module.exports = Parser;
