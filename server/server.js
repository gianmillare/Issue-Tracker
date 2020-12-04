// assign express to a variable and require it
const express = require('express');

// assign the express function to a variable
const app = express();

// connect the server to the public directory
app.use(express.static('public'));

// render the page to localhost3000
app.listen(3000, function() {
    console.log("App is running on localhost:3000!");
});