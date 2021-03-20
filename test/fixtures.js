const COLOR_SCHEMA = {
  red: '\x1B[31m',
  green: '\x1B[32m',
  yellow: '\x1B[33m',
  redBG: '\x1B[41m',
  greenBG: '\x1B[42m',
  yellowBG: '\x1B[43m',
  reset: '\x1B[0m',
};

const TEST_RESULT = {
  PASS: '✓',
  FAIL: 'x',
};

const getSuccessfulSuite = (text) =>
  `${COLOR_SCHEMA.greenBG} ${text} ${COLOR_SCHEMA.reset}`;

const getFailedSuite = (text) =>
  `${COLOR_SCHEMA.redBG} ${text} ${COLOR_SCHEMA.reset}`;

const getSuccessfulReport = (text) =>
  `${COLOR_SCHEMA.green}${text}${COLOR_SCHEMA.reset}`;

const getFailedReport = (text) =>
  `${COLOR_SCHEMA.red}${text}${COLOR_SCHEMA.reset}`;

const getTestElapsed = (time) =>
  `${COLOR_SCHEMA.yellow}${time}${COLOR_SCHEMA.reset}s`;

module.exports = {
  getSuccessfulSuite,
  getFailedSuite,
  getSuccessfulReport,
  getFailedReport,
  getTestElapsed,
  TEST_RESULT,
};
