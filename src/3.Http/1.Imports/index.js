const fn = require("./module");
fn();

const { add, sub } = require("./namedModule");
console.log('add', add(1,1));
console.log('sub', sub(1,1));
