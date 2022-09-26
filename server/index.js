// default server runner filename

const app = require("./app");
const port = 3000;

// Start the server listening
app.listen(port, () => console.log("Server now listening on port ${port}..."));
