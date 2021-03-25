const { FIXTURE } = require('./fixtures');
const TestReport = require('../src/testReport');
const TestSuite = require('../src/testSuite');

describe('Parser', () => {
  it('parse test case when has one description', () => {
    global.testReport = new TestReport();
    const testSuite = new TestSuite();
    global.testReport.addTestSuite(testSuite);

    require(`../${FIXTURE}/suites.test.js`);

    const testReport = global.testReport;
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
  });

  it('parse test cases when has multiple describe', () => {
    global.testReport = new TestReport();
    const testSuite = new TestSuite();
    global.testReport.addTestSuite(testSuite);

    require(`../${FIXTURE}/multiple-describe.test.js`);

    const testReport = global.testReport;
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
  });

  it('parse test cases when has nested describes', () => {
    global.testReport = new TestReport();
    const testSuite = new TestSuite();
    global.testReport.addTestSuite(testSuite);

    require(`../${FIXTURE}/nested-describes.test.js`);

    const testReport = global.testReport;
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
  });

  it('parse test cases when has mixed test case and describe', () => {
    global.testReport = new TestReport();
    const testSuite = new TestSuite();
    global.testReport.addTestSuite(testSuite);

    require(`../${FIXTURE}/mixed.test.js`);

    const testReport = global.testReport;
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
  });
});
