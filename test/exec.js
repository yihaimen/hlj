const { execSync } = require('child_process');
const exec = (cmd) => {
  try {
    return execSync(
      'node src/' + cmd.split(' ')[0] + '.js' + cmd.substring(cmd.indexOf(' '))
    ).toString();
  } catch (e) {
    return e;
  }
};

module.exports = { exec };
