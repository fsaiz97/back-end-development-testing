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
// Tell Express to read the body of POST requests
app.use(express.json())

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
    if (req.params.id >= beasts.length || req.params.id < 0) {
        res.status(404).send({ error: "This beast is extinct."});
    } else if (typeof req.params.id !== "number") {
        res.status(404).send({ error: "That is not a number"});
    } else {
        const filtered = beasts.filter(beast => beast.id === Number(req.params.id));
        res.send(filtered[0]);
    }
    
})

app.post("/beasts", (req, res) => {
    // Grab the beast data
    const newBeast = req.body;
    // Select an ID for the new beast
    newBeast["id"] = beasts.length;
    // Add it to list of beasts
    beasts.push(newBeast)
    // Return the body of the request
    res.status(200).send(newBeast);

})

module.exports = app;
