const { exec } = require('./helper/exec');
const { FIXTURE, getSuccessfulReport } = require('./helper/fixtures');

describe('Test Suites', () => {
  it('should print Test Suites when test 1 test.js', function () {
    const stdout = exec(`hlj ${FIXTURE}/test-dir`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(
      `Test Suites: ${getSuccessfulReport('2 passed')}, 2 total`
    );
    expect(stdout).toContain(
      `Tests: ${getSuccessfulReport('6 passed')}, 6 total`
    );
  });
});
