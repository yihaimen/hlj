const fs = require('fs');

class Walker {
  constructor() {
    this.files = [];
  }

  walk(path) {
    if (this.isTestFile(path)) {
      this.files.push(path);
      return this.files;
    }

    if (this.isDir(path)) {
      const fileNames = fs.readdirSync(path);
      fileNames.forEach((fileName) => {
        this.walk(path + '/' + fileName);
      });
    }
    return this.files;
  }

  isDir(fileName) {
    return fs.lstatSync(fileName).isDirectory();
  }

  isTestFile(fileName) {
    return fileName.endsWith('.test.js');
  }
}

module.exports = Walker;
