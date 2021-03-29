const { COLOR_SCHEMA } = require('./constant');
const pass = (text) => `${COLOR_SCHEMA.greenBG} ${text} ${COLOR_SCHEMA.reset}`;
const fail = (text) => `${COLOR_SCHEMA.redBG} ${text} ${COLOR_SCHEMA.reset}`;
const skip = (text) => `${COLOR_SCHEMA.yellowBG} ${text} ${COLOR_SCHEMA.reset}`;
const green = (text) => `${COLOR_SCHEMA.green}${text}${COLOR_SCHEMA.reset}`;
const red = (text) => `${COLOR_SCHEMA.red}${text}${COLOR_SCHEMA.reset}`;
const yellow = (text) => `${COLOR_SCHEMA.yellow}${text}${COLOR_SCHEMA.reset}`;
const time = (time) => `${COLOR_SCHEMA.yellow}${time}s${COLOR_SCHEMA.reset}`;
module.exports = {
  pass,
  fail,
  skip,
  green,
  red,
  yellow,
  time,
};
