let passedCount = 0;
let totalCount = 0;

const test = (name, callback) => {
    totalCount++;
    callback();
};

const getToBe = actual => (expected) => {
    if (actual !== expected) {
        throw new Error("");
    }
    passedCount++;
};

const expect = (actual) => {
    return {toBe: getToBe(actual)};
};

const getPassedCount = () => {
    return passedCount;
};

const getTotalCount = () => {
    return totalCount;
};

module.exports = {test, expect, getPassedCount, getTotalCount};
