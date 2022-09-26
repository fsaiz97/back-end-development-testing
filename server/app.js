// default server app filename

const express = require("express");

const beasts = require("./beasts");

// Make a basic server
app = express();

// Set up the server routes
app.get("/", (req, res) => {
    res.send("Welcome to the Bestiary!");
});

app.get("/beasts", (req, res) => {
    res.send(beasts);
})

module.exports = app;
