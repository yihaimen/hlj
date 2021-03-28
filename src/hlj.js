#!/usr/bin/env node
const fs = require('fs');
const { it, test, describe } = require('./core');

const { getTestResult } = require('./report');

const TestReport = require('./model/testReport.js');
const TestSuite = require('./model/testSuite.js');
const Parser = require('./parser/parser');
const Walker = require('./walker');
const ConsoleReporter = require('./report/consoleReporter');

let isPassed;
let testMessage;

const fileName = process.cwd() + '/' + process.argv[2];
const testMethod = process.argv[3];

const files = new Walker().walk(fileName);
const testReport = new Parser().parse(files);

testReport.execute();

const result = new ConsoleReporter(testReport).render();
console.log(result);
