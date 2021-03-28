const Status = require('../../src/model/status');

describe('Status', () => {
  it('should change', () => {
    const status = new Status();
    status.pass();
    expect(status.isPassed()).toBe(true);
    status.fail();
    expect(status.isPassed()).toBe(false);
  });
});
