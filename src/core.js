let passedCount = 0;
let totalCount = 0;
let testCaseResults = [];

const describe = (name, callback) => {
  callback();
};

const it = (name, callback) => {
  test(name, callback);
};
const test = (name, callback) => {
  if (global.testMethod && name !== global.testMethod) {
    return;
  }
  totalCount++;
  try {
    callback();
    testCaseResults.push({ name, isPassed: true });
    passedCount++;
  } catch (e) {
    testCaseResults.push({ name, isPassed: false });
    throw e;
  }
};

const getPassedCount = () => {
  return passedCount;
};

const getTotalCount = () => {
  return totalCount;
};

const getTestCaseResults = () => {
  return testCaseResults;
};

module.exports = {
  it,
  test,
  describe,
  getPassedCount,
  getTotalCount,
  getTestCaseResults,
};
