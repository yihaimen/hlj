const sum = require("./sum");

test("1 plus 1 is 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("2 plus 2 is 5", () => {
  expect(sum(2, 2)).toBe(5);
});
