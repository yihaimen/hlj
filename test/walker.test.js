const Walker = require('../src/walker');
describe('Walker', () => {
  it('should exclude normal js files', () => {
    const files = new Walker().walk(
      process.cwd() + '/fixture/test-dir/test-matcher-3.js'
    );
    expect(files.length).toBe(0);
  });

  it('should list sub directory', () => {
    const files = new Walker().walk(
      process.cwd() + '/fixture/test-multiple-level-dir/'
    );
    expect(files.length).toBe(3);
    expect(files[0].endsWith('test-matcher-3.test.js')).toBe(true);
    expect(files[1].endsWith('test-matcher-2.test.js')).toBe(true);
    expect(files[2].endsWith('test-matcher.test.js')).toBe(true);
  });

  it('should filter test files with *.test.js', () => {
    const files = new Walker().walk(process.cwd() + '/fixture/test-dir/');
    expect(files.length).toBe(2);
    expect(files[0].endsWith('test-matcher-2.test.js')).toBe(true);
    expect(files[1].endsWith('test-matcher.test.js')).toBe(true);
  });
});
