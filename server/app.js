// default server app filename

express = require("express");

// Make a basic server
app = express();

// Set up the server routes
app.get("/", (request, response) => {
    response.send("Hello, World!");
});

module.exports = app;
