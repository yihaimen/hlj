const { exec } = require('./exec');
it('should specify test to run', () => {
  // hlj xxx.test xxx
  const stdout = exec("hlj specify-test-method.test.js 'test 1'");
  expect(stdout).toContain(
    '' +
      'PASS specify-test-method.test.js\n' +
      '  ✓ test 1\n' +
      'Tests: 1 passed, 1 total\n'
  );
});
