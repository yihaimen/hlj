const { COLOR_SCHEMA } = require('./constant');
const getSuccessfulSuite = (text) =>
  `${COLOR_SCHEMA.greenBG} ${text} ${COLOR_SCHEMA.reset}`;

const getFailedSuite = (text) =>
  `${COLOR_SCHEMA.redBG} ${text} ${COLOR_SCHEMA.reset}`;

const green = (text) => `${COLOR_SCHEMA.green}${text}${COLOR_SCHEMA.reset}`;

const red = (text) => `${COLOR_SCHEMA.red}${text}${COLOR_SCHEMA.reset}`;

const yellow = (time) => `${COLOR_SCHEMA.yellow}${time}s${COLOR_SCHEMA.reset}`;
module.exports = {
  getSuccessfulSuite,
  getFailedSuite,
  green,
  red,
  yellow,
};
