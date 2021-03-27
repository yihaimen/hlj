const { FIXTURE } = require('./fixtures');
const TestReport = require('../src/testReport');
const TestSuite = require('../src/testSuite');
const Parser = require('../src/parser');

describe('Parser', () => {
  it('parse test case when has one fixture', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/suites.test.js`]);

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getSuite(0).getPath()).toBe(`${FIXTURE}/suites.test.js`);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getDescription(1).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getDescription(1).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getDescription(1).getChild(1).getName()).toBe(
      '2 is equal to 2'
    );
  });

  it('parse test cases when has multiple describe', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/multiple-describe.test.js`]);

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getDescription(1).getName()).toBe(
      'Keyword 1'
    );
    expect(testReport.getSuite(0).getDescription(1).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getDescription(2).getName()).toBe(
      'Keyword 2'
    );
    expect(testReport.getSuite(0).getDescription(2).getChild(0).getName()).toBe(
      '2 is equal to 2'
    );
    expect(
      typeof testReport.getSuite(0).getDescription(2).getChild(0).getCallback()
    ).toBe('function');
  });

  it('parse test cases when has nested describes', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/nested-describes.test.js`]);

    console.log(testReport.getSuite(0).getDescription(1));

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getDescription(1).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getDescription(1).getChild(0).getName()).toBe(
      'Keyword 1'
    );
    expect(
      testReport.getSuite(0).getDescription(1).getChild(0).getChild(0).getName()
    ).toBe('1 is equal to 1');
    expect(testReport.getSuite(0).getDescription(2).getChild(0).getName()).toBe(
      'Keyword 2'
    );
    expect(
      testReport.getSuite(0).getDescription(2).getChild(0).getChild(0).getName()
    ).toBe('2 is equal to 2');
  });

  it('parse test cases when has mixed test case and describe', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/mixed.test.js`]);

    expect(testReport.getSuite(0).getDescription(0).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getDescription(1).getName()).toBe('1 ');
    expect(testReport.getSuite(0).getDescription(0).getChild(0).getName()).toBe(
      '2'
    );
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
  });

  it('parse test case when has multiple fixtures', () => {
    const parser = new Parser();

    const files = [`${FIXTURE}/suites.test.js`, `${FIXTURE}/mixed.test.js`];
    const testReport = parser.parse(files);

    expect(testReport.getTotalSuites()).toBe(2);
    expect(testReport.getTotalTestCases()).toBe(4);
  });
});
