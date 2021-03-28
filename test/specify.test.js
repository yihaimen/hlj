const { exec } = require('./helper/exec');
const { getSuccessfulReport, FIXTURE } = require('./helper/fixtures');
it('should specify test to run', () => {
  // hlj xxx.test xxx
  const stdout = exec(`hlj ${FIXTURE}/specify-test-method.test.js 'test 1'`);
  expect(stdout).toContain('PASS');
  expect(stdout).toContain(
    `Tests: ${getSuccessfulReport('1 passed')}, 1 total`
  );
});
