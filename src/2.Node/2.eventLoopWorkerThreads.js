const crypto = require("crypto");
const start = Date.now();

// Long-running function
function logHashTime(async = false) {
  if (async) {
    // Async
    crypto.pbkdf2("a", "b", 200000, 512, "sha512", () => {
      console.log("Hash: ", Date.now() - start);
    });
  } else {
    // Sync
    crypto.pbkdf2Sync("a", "b", 200000, 512, "sha512");
    console.log("Hash: ", Date.now() - start);
  }
}

for (let i = 0; i < 10; i++) {
  logHashTime(true);
}

console.log("Run");

/**
 *
 t(s)
 ^
 3  |
 2  |                      [f]  <------- (In queue)
 1  |  [f]  [f]  [f]  [f]
 --------------------------------> calls(n)

 */

// UV_THREADPOOL_SIZE
