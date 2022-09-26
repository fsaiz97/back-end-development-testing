const express = require("express");

// Make a basic server
app = express();

// Set up the server routes
app.get("/", (request, response) => {
    response.send("Hello, World!");
});

// Start the server listening
app.listen(3000)
