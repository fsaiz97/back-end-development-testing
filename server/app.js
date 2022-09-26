// default server app filename

const express = require("express");
// "Kelpie", "Minotaur", "Hydra", "Hippogriff"
// { name: "", habitat: "", dangerRating: "", description: "", encounterRate: "", loot: [] }
let beasts = [
    { name: "Cyclops", habitat: "Greek  islands", dangerRating: 3, description: "A one-eyed giant", encounterRate: 0.05, loot: ["Cyclops eye", "sheep", "blood"] },
    { name: "Siren", habitat: "Greek islands", dangerRating: 5, description: "Really good looking, but slightly psychotic", encounterRate: 0.5, loot: ["haunting melody", "sailors' bones", "tail"] },
    { name: "Minotaur", habitat: "Greek labyrinths", dangerRating: 4, description: "Half-man, half-bull", encounterRate: 0.3, loot: ["six pack", "horns", "thread"] }
];

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
