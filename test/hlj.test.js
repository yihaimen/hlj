const { exec } = require('./exec');
const {
  getSuccessfulReport,
  getSuccessfulSuite,
  getFailedReport,
  getFailedSuite,
} = require('./fixtures');
describe('JavaScript TDD framework', () => {
  it('is a CLI program', () => {
    const stdout = exec('hlj sum.test.js');
    expect(stdout).toContain('PASS');
  });
  it('should return PASS when test passed', () => {
    const stdout = exec('hlj sum.test.js');
    expect(stdout).toContain('PASS');
  });
  it('should return FAIL when test failed', () => {
    const stdout = exec('hlj failed.test.js');
    expect(stdout).toContain('FAIL');
  });
  describe('Test report', () => {
    it('should output number of tests passed', () => {
      const stdout = exec('hlj two-tests.test.js');
      expect(stdout).toContain(
        '' +
          `${getSuccessfulSuite('PASS')} two-tests.test.js\n` +
          `  ${getSuccessfulReport('✓')} 1 plus 2 is 3\n` +
          `  ${getSuccessfulReport('✓')} 2 plus 2 is 4\n` +
          `Tests: ${getSuccessfulReport('2 passed')}, 2 total\n`
      );
    });
    it('should output number of tests passed while there are failed tests', () => {
      const stdout = exec('hlj passed-and-failed.test.js');
      expect(stdout).toContain(
        '' +
          `${getFailedSuite('FAIL')} passed-and-failed.test.js\n` +
          `  ${getSuccessfulReport('✓')} 1 plus 2 is 3\n` +
          `  ${getFailedReport('x')} 2 plus 2 is 5\n` +
          '  Expected: 5\n' +
          '  Received: 4\n' +
          `Tests: ${getFailedReport('1 failed')}, ${getSuccessfulReport(
            '1 passed'
          )}, 2 total\n`
      );
    });

    it('should output execution time', () => {
      const stdout = exec('hlj passed-and-failed.test.js');
      const expectSuffix = /([0-9]*[.])?[0-9]+s/;
      const expectPrefix = /Time:/;

      expect(stdout).toMatch(expectPrefix);
      expect(stdout).toMatch(expectSuffix);
    });
  });

  describe('Run tests in directory', () => {
    it('should run all files in specified directory', () => {
      const stdout = exec('hlj test-dir/');
      expect(stdout).toContain('PASS');
      expect(stdout).toContain(
        `Tests: ${getSuccessfulReport('6 passed')}, 6 total`
      );
    });
  });
});
