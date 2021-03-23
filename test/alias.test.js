const { exec } = require('./exec');
const { getSuccessfulReport, getSuccessfulSuite, FIXTURE } = require('./fixtures');

describe('Keyword', () => {
  it('should run it as test', function () {
    const stdout = exec(`hlj ${FIXTURE}/it.test.js`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(
      `Tests: ${getSuccessfulReport('1 passed')}, 1 total`
    );
  });

  it('should organize test cases with describe', () => {
    const stdout = exec(`hlj ${FIXTURE}/describe.test.js`);
    expect(stdout).toContain(`${getSuccessfulSuite('PASS')} ${FIXTURE}/describe.test.js`);
    expect(stdout).toContain(
      `Tests: ${getSuccessfulReport('2 passed')}, 2 total`
    );
  });
});
