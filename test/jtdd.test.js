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

describe("JavaScript TDD framework", () => {
  it("is a CLI program", () => {
    const stdout = exec("jtdd sum.test.js");
    expect(stdout).toContain("PASS");
  });
  it("should return PASS when test passed", () => {
    const stdout = exec("jtdd sum.test.js");
    expect(stdout).toContain("PASS");
  });
  it('should return ERROR when test failed', () => {
    const stdout = exec("jtdd failed.test.js");
    expect(stdout).toBe("ERROR\n");
  });
  describe('Test report', () => {
    it('should output number of tests passed', () => {
      const stdout = exec("jtdd two-tests.test.js");
      expect(stdout).toBe("" +
          "PASS two-tests.test.js\n" +
          "Tests: 2 passed, 2 total\n");
    });
  });
});
