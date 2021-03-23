// Tests: 2 failed, 1 skipped, 1 passed, 4 total
test.skip("the object value is not equal", () => {
    expect({ a: 1 }).toBe({ a: 2 });
});