// Assign required express
const express = require('express');

// Assign express function to app
const app = express();

// connect server to front end directory
app.use(express.static('public'));

// render the front end to localhost:3000
app.listen(3000, function() {
    console.log("App is running on localhost:3000!");
});