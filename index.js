const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`App listening at:`);
  console.log(`http://localhost:${port}`);
});
