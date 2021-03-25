const { exec } = require('./exec');
const { FIXTURE, getSuccessfulReport } = require('./fixtures')


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
});
