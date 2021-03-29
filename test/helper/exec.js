const { execSync } = require('child_process');

const exec = (arg) => {
  try {
    const command = arg.split(' ')[0];
    const testCasePath = arg.substring(arg.indexOf(' ') + 1);
    const cmd = `node src/${command}.js ${testCasePath}`;
    return execSync(cmd).toString();
  } catch (e) {
    return e;
  }
};

module.exports = { exec };
