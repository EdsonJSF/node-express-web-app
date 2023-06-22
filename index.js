const express = require("express");
const app = express();

const port = 8000;

// Show static content
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html")
});

app.listen(port, () => {
  console.log(`App listening at:`);
  console.log(`http://localhost:${port}`);
});
