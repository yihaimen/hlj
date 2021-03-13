let passedCount = 0;

const test = (name, callback) => {
    passedCount++;
    callback();
};

const getToBe = actual => (expected) => {
    if (actual !== expected) {
        throw new Error("");
    }
};

const expect = (actual) => {
    return {toBe: getToBe(actual)};
};

const getPassedCount = () => {
    return passedCount;
};

module.exports = {test, expect, getPassedCount};
