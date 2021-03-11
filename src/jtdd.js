const fileName = process.argv[2];

const runTest = (fileName) => {
  require("../" + fileName);
};

try {
  runTest(fileName);
  console.log("PASS");
} catch (e) {
  console.log(e);
}
