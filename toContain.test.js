test('A string toContains another string', () => {
  expect('abcd').toContain('ab');
  expect('abcd').toContain('bc');
  expect('abcd').toContain('cd');
});

test('A string not toContains another string', () => {
  expect('abcd').not.toContain('def');
});
