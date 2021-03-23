const { exec } = require('./exec');
const { FIXTURE } = require('./fixtures');

describe('Skip', () => {
  it('should skip test', function () {
    const stdout = exec(`hlj ${FIXTURE}/skipped.test.js`);
    expect(stdout).toContain('PASS');
    expect(stdout).toContain('1 skipped');
    expect(stdout).toContain('1 total');
  });
});
