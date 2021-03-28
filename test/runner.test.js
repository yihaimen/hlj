const { exec } = require('./helper/exec');
const { getSuccessfulReport, FIXTURE } = require('./helper/fixtures');
describe('Runner', () => {
  describe('Run tests in directory', () => {
    it('should run all .test.js files in specified directory', () => {
      const stdout = exec(`hlj ${FIXTURE}/test-dir/`);
      expect(stdout).toContain('PASS');
      expect(stdout).toContain('6 passed');
      expect(stdout).toContain('6 total');
    });

    it('should run tests in child directory recursively', () => {
      const stdout = exec(`hlj ${FIXTURE}/test-multiple-level-dir/`);
      expect(stdout).toContain('PASS');
      expect(stdout).toContain('6 passed');
      expect(stdout).toContain('6 total');
    });
  });
});
