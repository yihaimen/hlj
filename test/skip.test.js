const { exec } = require('./exec');
const { getSuccessfulReport, getSuccessfulSuite, getSkippedReport, FIXTURE } = require('./fixtures');
//TODO skip test
// describe('Keyword', () => {
//   it('should run it as test', function () {
//     const stdout = exec(`hlj ${FIXTURE}/skipped.test.js`);
//     expect(stdout).toContain('PASS');
//     expect(stdout).toContain(
//       `Tests: ${getSkippedReport('1 skipped')}, 1 total`
//     );
//   });
// });
