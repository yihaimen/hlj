const { FIXTURE } = require('./fixtures');
const Parser = require('../src/parser');

describe('Parser', () => {
  it('should parse one fixture', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/suites.test.js`]);

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getSuite(0).getPath()).toBe(`${FIXTURE}/suites.test.js`);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getChild(0).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getChild(0).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getChild(0).getChild(1).getName()).toBe(
      '2 is equal to 2'
    );
  });

  it('should parse multiple describes', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/multiple-describe.test.js`]);

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getChild(0).getName()).toBe('Keyword 1');
    expect(testReport.getSuite(0).getChild(0).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getChild(1).getName()).toBe('Keyword 2');
    expect(testReport.getSuite(0).getChild(1).getChild(0).getName()).toBe(
      '2 is equal to 2'
    );
    expect(
      typeof testReport.getSuite(0).getChild(1).getChild(0).getCallback()
    ).toBe('function');
  });

  it('should parse nested describes', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/nested-describes.test.js`]);

    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(2);
    expect(testReport.getSuite(0).getChild(0).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getChild(0).getChild(0).getName()).toBe(
      'Keyword 1'
    );
    expect(
      testReport.getSuite(0).getChild(0).getChild(0).getChild(0).getName()
    ).toBe('1 is equal to 1');
    expect(testReport.getSuite(0).getChild(0).getChild(1).getName()).toBe(
      'Keyword 2'
    );
    expect(
      testReport.getSuite(0).getChild(0).getChild(1).getChild(0).getName()
    ).toBe('2 is equal to 2');
  });

  it('should parse mixed test case and describe at same level', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/mixed.test.js`]);

    expect(testReport.getSuite(0).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getChild(1).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getChild(1).getChild(0).getName()).toBe(
      '2 is equal to 2'
    );
    expect(testReport.getSuite(0).getChild(2).getName()).toBe(
      '3 is equal to 3'
    );
    expect(testReport.getTotalSuites()).toBe(1);
    expect(testReport.getTotalTestCases()).toBe(3);
  });

  it('should parse multiple nested mixed test case and describe', () => {
    const parser = new Parser();

    const testReport = parser.parse([`${FIXTURE}/really-complex.test.js`]);

    expect(testReport.getSuite(0).children.length).toBe(3);
    expect(testReport.getSuite(0).getChild(0).getName()).toBe(
      '1 is equal to 1'
    );
    expect(testReport.getSuite(0).getChild(1).getName()).toBe('Keyword');
    expect(testReport.getSuite(0).getChild(1).getChild(0).getName()).toBe(
      'Keyword 2'
    );
    expect(
      testReport.getSuite(0).getChild(1).getChild(0).getChild(0).getName()
    ).toBe('2 is equal to 2');
    expect(testReport.getSuite(0).getChild(1).getChild(1).getName()).toBe(
      '3 is equal to 3'
    );
    expect(testReport.getSuite(0).getChild(1).getChild(2).getName()).toBe(
      'Keyword 3'
    );
    expect(
      testReport.getSuite(0).getChild(1).getChild(2).getChild(0).getName()
    ).toBe('5 is equal to 5');
    expect(testReport.getSuite(0).getChild(2).getName()).toBe('Keyword 4');
    expect(testReport.getSuite(0).getChild(2).getChild(0).getName()).toBe(
      '4 is equal to 4'
    );
  });

  it('should parse multiple fixtures', () => {
    const parser = new Parser();

    const files = [`${FIXTURE}/suites.test.js`, `${FIXTURE}/mixed.test.js`];
    const testReport = parser.parse(files);

    expect(testReport.getSuite(0).getPath()).toBe('fixture/suites.test.js');
    expect(testReport.getSuite(1).getPath()).toBe('fixture/mixed.test.js');
    expect(testReport.getTotalSuites()).toBe(2);
    expect(testReport.getTotalTestCases()).toBe(5);
  });

  describe('Alias', () => {
    it("both 'test' and 'it' are test case", () => {
      const parser = new Parser();

      const testReport = parser.parse([`${FIXTURE}/alias.test.js`]);

      expect(testReport.getTotalSuites()).toBe(1);
      expect(testReport.getTotalTestCases()).toBe(2);
    });
  });
});
