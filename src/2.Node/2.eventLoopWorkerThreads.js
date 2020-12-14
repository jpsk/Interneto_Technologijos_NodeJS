const crypto = require("crypto");
const start = Date.now();

function logHashTime() {
  // Sync
  crypto.pbkdf2Sync("a", "b", 200000, 512, "sha512");
  console.log("Hash: ", Date.now() - start);

  // // Async
  // crypto.pbkdf2("a", "b", 200000, 512, "sha512", () => {
  //   console.log("Hash: ", Date.now() - start);
  // });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();

console.log('Run');




















/**




           t(s)
            ^
         3  |
         2  |                      [f]  <------- (In queue)
         1  |  [f]  [f]  [f]  [f]
            --------------------------------> calls(n)




















 */


// UV_THREADPOOL_SIZE


