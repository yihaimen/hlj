class TestCase {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
  getName() {
    return this.name;
  }

  getCallback() {
    return this.callback;
  }
}

module.exports = TestCase;
