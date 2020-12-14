// import function
const fn = require("./module");
const { add, sub } = require("./namedModule");

fn();

console.log('add', add(1,1));
console.log('sub', sub(1,1));
