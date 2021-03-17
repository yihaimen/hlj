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


describe('Alias',()=>{
	it('should run it as test', function () {
		const stdout = exec("hlj it.test.js");
		expect(stdout).toContain("PASS");
		expect(stdout).toContain("Tests: 1 passed, 1 total");
	});
})
