const http = require("http");

const port = 8000;

http
  .createServer((req, res) => {
    const headerHola = req.headers.hola;
    console.log(headerHola);

    res.writeHead(200, { "Content-Type": "application/json" });

    const data = {
      id: 1,
      name: "Edson",
    };

    res.write(JSON.stringify(data));

    res.end();
  })
  .listen(port);

console.log("Sevidor en el puerto:", port);
