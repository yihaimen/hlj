it('1 is equal to 1', () => {
  expect(1).toBe(1);
});

describe('Keyword', () => {
  describe('Keyword 2', () => {
    it('2 is equal to 2', () => {
      expect(2).toBe(2);
    });
  });

  it('3 is equal to 3', () => {
    expect(3).toBe(3);
  });

  describe('Keyword 3', () => {
    it('5 is equal to 5', () => {
      expect(5).toBe(5);
    });
  });
});

describe('Keyword 4', () => {
  it('4 is equal to 4', () => {
    expect(4).toBe(4);
  });
});
