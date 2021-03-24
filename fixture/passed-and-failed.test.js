const sum = require('./sum');

test('1 plus 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 1)).toBe(3);
});

test('2 plus 2 is 5', () => {
  expect(sum(2, 2)).toBe(5);
});
