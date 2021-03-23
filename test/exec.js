const { execSync } = require('child_process');
const exec = (cmd) => {
  try {
    return execSync(
      'node src/' +
        cmd.split(' ')[0] +
        '.js' +
        ' ' +
        'fixture/' +
        cmd.substring(cmd.indexOf(' ') + 1)
    ).toString();
  } catch (e) {
    return e;
  }
};

module.exports = { exec };
