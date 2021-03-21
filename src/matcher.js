const expect = (received) => {
  const matchers = (isNot = false) => ({
    toBe: getToBe(isNot)(received),
    toEqual: getToEqual(isNot)(received),
    toContain: getToContain(isNot)(received),
    toMatch: getToMatch(isNot)(received),
  });
  return {
    ...matchers(),
    not: { ...matchers(true) },
  };
};

const getToBe = (isNot) => (received) => (expected) => {
  if (received !== expected && !isNot) {
    throw new Error(JSON.stringify({ expected, received }));
  }
};

const getToEqual = (isNot) => (received) => (expected) => {
  const isObject = typeof received === 'object' && typeof expected === 'object';
  const condition = isObject
    ? JSON.stringify(received) !== JSON.stringify(expected)
    : received !== expected;

  if (condition && !isNot) {
    throw new Error(JSON.stringify({ expected, received }));
  }
};

const getToContain = (isNot) => (received) => (expected) => {
  const contains = received.includes(expected);

  if (!contains && !isNot) {
    throw new Error(JSON.stringify({ expected, received }));
  }
};

const getToMatch = (isNot) => (received) => (expected) => {
  const contains = received.match(expected);

  if (!contains && !isNot) {
    throw new Error(JSON.stringify({ expected, received }));
  }
};

module.exports = {
  expect
};