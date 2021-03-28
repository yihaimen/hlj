const vm = require('vm');
const Status = require('./status');

class TestCase {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.status = new Status();
    this.expected = '';
    this.received = '';
  }

  getName() {
    return this.name;
  }

  getCallback() {
    return this.callback;
  }

  execute(testCaseName) {
    if (!this.callback) {
      this.status.skip();
      return;
    }

    if (testCaseName && !this.name.includes(testCaseName)) {
      this.status.skip();
      return;
    }

    try {
      this.callback();
      this.status.pass();
    } catch (e) {
      const { expected, received } = JSON.parse(e.message);
      this.expected = expected;
      this.received = received;
      this.status.fail();
    }
  }

  isPassed() {
    return this.status.isPassed();
  }

  getStatus() {
    return this.status;
  }

  getPassedCount() {
    return this.status.isPassed() ? 1 : 0;
  }

  getSkippedCount() {
    return this.status.isSkipped() ? 1 : 0;
  }

  getTotalCount() {
    return 1;
  }

  getExpected() {
    return this.expected;
  }

  getReceived() {
    return this.received;
  }
}

module.exports = TestCase;
