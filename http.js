const http = require("http");

const port = 8000;

http
  .createServer((req, res) => {
    res.write("Hola Mundo");
    res.end();
  })
  .listen(port);

console.log("Sevidor en el puerto:", port);
