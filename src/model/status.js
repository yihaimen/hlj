class Status {
  constructor() {
    this.skippedCount = 0;
    this.failedCount = 0;
    this.passedCount = 0;
    this.totalCount = 0;
  }

  pass() {
    this.status = 'passed';
  }

  fail() {
    this.status = 'failed';
  }

  isPassed() {
    return this.status === 'passed';
  }

  isSkipped() {
    return this.status === 'skipped';
  }

  getSkippedCount() {
    return this.skippedCount;
  }

  getFailedCount() {
    return this.failedCount;
  }

  getPassedCount() {
    return this.passedCount;
  }

  getTotalCount() {
    return this.totalCount;
  }

  passed(count) {
    this.passedCount = count;
  }
}

module.exports = Status;
