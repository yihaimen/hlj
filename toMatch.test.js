test('A string toMatch a regular express', () => {
  const expectRegex = /Time: ([0-9]*[.])?[0-9]+ s/;
  expect('Time: 0.01 s').toMatch(expectRegex);
});

test('A string not.toMatch a regular express', () => {
  const expectRegex = /Time: ([0-9]*[.])?[0-9]+ s/;
  expect('PASS').not.toMatch(expectRegex);
});
