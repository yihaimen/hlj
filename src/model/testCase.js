const vm = require('vm');
const Status = require('./status');

class TestCase {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.status = new Status();
  }

  getName() {
    return this.name;
  }

  getCallback() {
    return this.callback;
  }

  execute() {
    try {
      this.callback();
      this.status.pass();
    } catch (e) {
      this.status.fail();
      console.log(e);
    }
  }
}

module.exports = TestCase;
