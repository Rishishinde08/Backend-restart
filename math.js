

module.exports.sum = (a,b) => a+b;
exports.sum = (a,b) => a+b;

const sum = (a,b) => a+b;
const multi = (a,b) => a*b;
const div = (a,b) => a/b;
const sub = (a,b) => a-b;


// module.exports = 123;

let obj = {
    sum: sum,
    multi : multi,
    div : div,
    sub : sub
};


module.exports= {
    sum: sum,
    multi : multi,
    div : div,
    sub : sub
};


module.exports = obj;