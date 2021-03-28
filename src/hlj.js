#!/usr/bin/env node
const Parser = require('./parser/parser');
const Walker = require('./walker');
const ConsoleReporter = require('./report/consoleReporter');

const main = (fileName, testCaseName) => {
  const files = new Walker().walk(fileName);
  const testReport = new Parser().parse(files);

  testReport.execute(testCaseName);

  const result = new ConsoleReporter(process.cwd() + '/', testReport).render();
  console.log(result);
};

const fileName = process.cwd() + '/' + process.argv[2];
const testCaseName = process.argv[3];

main(fileName, testCaseName);
