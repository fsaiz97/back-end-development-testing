// default server app filename

const express = require("express");
const cors = require("cors");

const beasts = require("./beasts");


function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}


// Make a basic server
const app = express();
// Allow requests from other origins/machines
app.use(cors());

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

app.get("/beasts/random", (req, res) => {
    let index = randomIndex(beasts);
    res.send(beasts[index]);
})

app.get("/beasts/:id", (req, res) => {
    const filtered = beasts.filter(beast => beast.id === Number(req.params.id));
    res.send(filtered[0]);
})

app.post("/beasts", (req, res) => {
    // Grab the beast data

    // Add it to list of beasts

    // Return a message saying it worked

    res.send("I am working!")

})

module.exports = app;
