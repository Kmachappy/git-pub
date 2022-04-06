require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const drinks = require("./models/drinks.js");

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get("/drinks/", (req, res) => {
    res.send(drink)
});

app.get("/fruits/:id", (req, res) => {
  res.render("show.ejs", { fruit: fruits[req.params.id] });
});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
