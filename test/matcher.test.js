const { exec } = require('./exec');
const { getSuccessfulReport, FIXTURE } = require('./fixtures');

describe('Test Matcher', () => {
  it('should output test not.toBe matcher', () => {
    const stdout = exec(`hlj ${FIXTURE}/test-matcher.test.js`);
    expect(stdout).toContain('PASS');
  });

  it('should output pass test not.toEqual matcher', () => {
    const stdout = exec(`hlj ${FIXTURE}/test-matcher.test.js`);
    // todo: Object diff
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(`Tests: ${getSuccessfulReport('3 passed')}, 3 total`);
  });

  it('should verify toContain', () => {
    const stdout = exec(`hlj ${FIXTURE}/toContain.test.js`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(`Tests: ${getSuccessfulReport('2 passed')}, 2 total`);
  });

  it('should verify toMatch', () => {
    const stdout = exec(`hlj ${FIXTURE}/toMatch.test.js`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain(`Tests: ${getSuccessfulReport('2 passed')}, 2 total`);
  });
});
