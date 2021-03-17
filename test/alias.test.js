const { exec } = require('./exec');

describe('Keyword', () => {
  it('should run it as test', function () {
    const stdout = exec('hlj it.test.js');
    expect(stdout).toContain('PASS');
    expect(stdout).toContain('Tests: 1 passed, 1 total');
  });

  it('should organize test cases with describe', () => {
    const stdout = exec('hlj describe.test.js');
    expect(stdout).toContain('PASS describe.test.js');
    //expect(stdout).toContain('xxx');
    expect(stdout).toContain('Tests: 2 passed, 2 total');
  });
});
