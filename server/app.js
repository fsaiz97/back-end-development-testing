const express = require("express");
const cors = require("cors");

const beasts = require("./beasts"); // Hardcoded data store
const logRoute = require("./route-logger");


function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Setup app and middleware
function middlewareSetup(app) { // Allow requests from other origins/machines
    app.use(cors());
    // Tell Express to read the body of POST requests
    app.use(express.json())

    // Add middleware to log route
    app.use(logRoute);

    return app;
}

function serverRouteSetup(app) {
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
        try {

            if (!req.params.searchTerm) {
                throw "Invalid input"
            }

            // set up regexs
            const idRegex = /\d+/;
            const nameRegex = /\w+/;

            // check if the search term is an id
            if (idRegex.test(req.params.searchTerm)) {
                id = parseInt(req.params.searchTerm);
                if (id < 0 || id > beasts.length) {
                    throw "No such beast";
                } else {
                    res.status(200).send(beasts[id]);
                }
            } else if (nameRegex.test(req.params.searchTerm)) { // check if search term is a name
                const filtered = beasts.filter(beast => beast.name.toLowerCase() === req.params.searchTerm.toLowerCase())
                if (filtered.length > 0) {
                    res.status(200).send(filtered[0]);
                } else {
                    throw "Monster not found.";
                }
            } else {
                throw "Invalid search term.";
            }
        } catch (e) {
            console.log(e);
            res.status(400).send({error: e})
        }
    })

    app.post("/beasts", (req, res) => { // Grab the beast data
        const newBeast = req.body;
        // Select an ID for the new beast
        newBeast["id"] = beasts.length;
        // Add it to list of beasts
        beasts.push(newBeast)
        // Return the body of the request
        res.status(200).send(newBeast);

    })
}

// Create a basic server
const app = express();

middlewareSetup(app);

serverRouteSetup(app);


module.exports = app;
