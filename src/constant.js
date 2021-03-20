const BLANK_SPACE = ' ';

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
module.exports = {
  BLANK_SPACE,
  COLOR_SCHEMA,
  TEST_RESULT,
};
