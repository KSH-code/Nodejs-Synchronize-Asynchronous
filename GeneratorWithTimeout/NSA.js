module.exports = class NSA {

    constructor(startFunc, endFunc, ms) {
        this.startFunc = startFunc;
        this.endFunc = endFunc;
        this.ms = ms;
    }
    generator() {
        const that = this;
        return setTimeout(() => {

            function* gen(){
                yield that.endFunc();
            }
            gen().next();

        }, this.ms);
    }
};