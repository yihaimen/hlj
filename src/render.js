const { COLOR_SCHEMA } = require('./constant');
const getSuccessfulSuite = (text) =>
  `${COLOR_SCHEMA.greenBG} ${text} ${COLOR_SCHEMA.reset}`;

const getFailedSuite = (text) =>
  `${COLOR_SCHEMA.redBG} ${text} ${COLOR_SCHEMA.reset}`;

const getSuccessfulReport = (text) =>
  `${COLOR_SCHEMA.green}${text}${COLOR_SCHEMA.reset}`;

const getFailedReport = (text) =>
  `${COLOR_SCHEMA.red}${text}${COLOR_SCHEMA.reset}`;

const getTestElapsed = (time) =>
  `${COLOR_SCHEMA.yellow}${time}s${COLOR_SCHEMA.reset}`;
module.exports = {
  getSuccessfulSuite,
  getFailedSuite,
  getSuccessfulReport,
  getFailedReport,
  getTestElapsed,
};
