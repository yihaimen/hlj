const { exec } = require('./exec');

describe('Test Matcher', () => {
  it('should output test not.toBe matcher', () => {
    const stdout = exec('hlj test-matcher.test.js');
    expect(stdout).toContain('PASS');
  });

  it('should output pass test not.toEqual matcher', () => {
    const stdout = exec('hlj test-matcher.test.js');
    // todo: Object diff
    expect(stdout).toContain('PASS');
    expect(stdout).toContain('Tests: 3 passed, 3 total');
  });

  it('should verify toContain', () => {
    const stdout = exec('hlj toContain.test.js');
    expect(stdout).toContain('PASS');
    expect(stdout).toContain('Tests: 2 passed, 2 total');
  });
});
