require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const drinks = require("./models/drinks.js");

app.get("/", (req, res) => {
  res.render("index.ejs", { allFruits: fruits });
});

app.get("/fruits/", (req, res) => {
    res.render("index.ejs", { allFruits: fruits });
});

app.get("/fruits/:id", (req, res) => {
  res.render("show.ejs", { fruit: fruits[req.params.id] });
});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
