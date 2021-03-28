class Status {
  pass() {
    this.status = 'passed';
  }

  fail() {
    this.status = 'failed';
  }

  isPassed() {
    return this.status === 'passed';
  }
}

module.exports = Status;
