const Description = require('../src/model/description');
const TestCase = require('../src/model/testCase');
const TestSuite = require('../src/model/testSuite');
const { exec } = require('./helper/exec');
const { FIXTURE, getSuccessfulReport } = require('./helper/fixtures');

describe('test suites', () => {
  it('should print Test Suites when test 1 test.js', function () {
    const stdout = exec(`hlj ${FIXTURE}/suites.test.js`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(
      `Test Suites: ${getSuccessfulReport('1 passed')}, 1 total`
    );
    expect(stdout).toContain(
      `Tests: ${getSuccessfulReport('2 passed')}, 2 total`
    );
  });

  it('should return n when getTotalTestCases', () => {
    const tempChildren = [];
    const suite = new TestSuite('', tempChildren);
    const firstDescription = new Description();
    const firstTestCase = new TestCase();
    const secondTestCase = new TestCase();
    firstDescription.appendChildren([firstTestCase, secondTestCase]);
    suite.addChild(firstDescription);

    expect(suite.getTotalTestCases()).toBe(2);
  });
});
