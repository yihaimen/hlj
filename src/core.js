const test = (name, callback) => {
    callback();
};

const getToBe = actual => (expected) => {
    if (actual !== expected) {
        throw new Error("");
    }
};

const expect = (actual)=>{
    return {toBe: getToBe(actual)};
};

module.exports = {test, expect};
