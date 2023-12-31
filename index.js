const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", (err) => {});

// Show static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    name: "Edson Sánchez",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Elements",
    name: "Edson Sánchez",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Generic",
    name: "Edson Sánchez",
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`App listening at:`);
  console.log(`http://localhost:${port}`);
});
