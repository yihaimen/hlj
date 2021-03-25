const testCase = {
  description: 'description',
  status: 'pass|fail|running',
  estimated: 'Int',
  callback: Function,
  execute() {
    this.callback();
  },
};

const description = [
  {
    description: 'String',
    status: 'pass|fail|running',
    children: [Description | TestCase],
  },
];

const testSuite = {
  path: 'String',
  status: 'pass|fail|running',
  statics: {
    pass: 'int',
    skip: 'int',
    failed: 'int',
  },
  descriptions: [description],
};

const testReport = {
  status: 'String',
  testSuits: [testSuite],
};

/**
 * TODO:
 *  1. 添加global 测试报告，让测试套件分组
 *  2. 让套件中的describe 分组
 *  3. 让test分组
 */
