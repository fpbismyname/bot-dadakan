var http = require("http");
const keep_alive = () => {
  http
    .createServer(function (req, res) {
      res.write("I'm alive");
      res.end();
    })
    .listen(8080);
};

module.exports = keep_alive;