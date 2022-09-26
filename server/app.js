// default server app filename

const express = require("express");
const cors = require("cors");

const beasts = require("./beasts");
const logRoute = require("./route-logger");


function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}


// Make a basic server
const app = express();

// Middleware
// Allow requests from other origins/machines
app.use(cors());
// Tell Express to read the body of POST requests
app.use(express.json())

// Add middleware to log route
app.use(logRoute);

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

app.get("/beasts/:searchTerm", (req, res) => {

    // set up regexs
    const idRegex = /\d+/;
    const nameRegex = /\w+/;

    // check if the search term is an id
    if (idRegex.test(req.params.searchTerm)) {
        res.status(200).send(beasts[req.params.searchTerm]);
    } else if (nameRegex.test(req.params.searchTerm)) { // check if search term is a name
        const filtered = beasts.filter(beast => beast.name.toLowerCase() === req.params.searchTerm.toLowerCase())
        if (filtered.length > 0) {
            res.status(200).send(filtered[0]);
        } else {
            res.status(404).send( {error: "Monster not found."} )
        }
    } else {
        res.status(404).send({ error: "Invalid search term."})
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
