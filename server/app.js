// default server app filename

express = require("express");

// Make a basic server
app = express();

// Set up the server routes
app.get("/", (req, res) => {
    res.send("Welcome to the Bestiary!");
});

app.get("/beasts", (req, res) => {
    res.send(["Kelpie", "Minotaur", "Hydra", "Hippogriff"]);
})

module.exports = app;
