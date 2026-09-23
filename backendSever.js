const http = require("http");
const serverConfig = require("./config.json").servers;

const createServer = (host, port) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hello from ${host}:${port}\n`);
    })
    .listen(port, host, () => {
      console.log(`Server running at http://${host}:${port}/`);
    });
};

serverConfig.forEach((server) => {
  createServer(server.host, server.port);
});