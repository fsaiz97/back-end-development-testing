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

// :name treats name as a variable, stored in rep.params
// app.get("/beasts/:name", (req, res) => {
//     const filtered = beasts.filter(beast => beast.name === req.params.name);
//     res.send(filtered[0]);
// })

app.get("/beasts/:id", (req, res) => {
    const filtered = beasts.filter(beast => beast.id === Number(req.params.id));
    res.send(filtered[0]);
})

module.exports = app;
