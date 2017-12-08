const NSA = require('./NSA');

const timeOutTest = function(startFunc, endFunc, ms) {
    const nsa1 = new NSA(startFunc, endFunc, ms);
    startFunc();
    const gen = nsa1.generator();
};

module.exports = { timeOutTest };