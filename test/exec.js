const { execSync } = require("child_process");
const exec = (cmd) => {
  try {
    return execSync(
      "node src/" + cmd.split(" ")[0] + ".js" + " " + cmd.split(" ")[1]
    ).toString();
  } catch (e) {
    return e;
  }
};

module.exports = { exec };
