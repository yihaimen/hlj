const { exec } = require("./exec");

describe("Alias", () => {
  it("should run it as test", function () {
    const stdout = exec("hlj it.test.js");
    expect(stdout).toContain("PASS");
    expect(stdout).toContain("Tests: 1 passed, 1 total");
  });
});
