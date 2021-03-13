let passedCount = 0;
let totalCount = 0;
let result = [];

const test = (name, callback) => {
    totalCount++;
    try {
        callback();
        result.push("  ✓ " + name);
    } catch (e) {
        result.push("  ✕ " + name);
        throw e;
    }
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

const getTestCaseResults = () => {
    return result.join("\n");
};

module.exports = {test, expect, getPassedCount, getTotalCount, getTestCaseResults};
