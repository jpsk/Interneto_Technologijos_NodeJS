const { request } = require("http");

(function () {
  // setInterval(function () {
  //   console.log(`tick: ${Date.now()}`);
  // }, 250);

  let data = "";

  const opts = { host: "localhost", port: 8080, method: "GET", path: "/" };
  request(opts, function (response) {
    console.log("Request started");
    
    response.on("data", function (d) {
      data += d;
      console.log(`Receiving data: ${d}`);
    });
    response.on("end", function () {
      console.log(`Request ended successfully: ${data}`);
    });
  }).end();
})();
