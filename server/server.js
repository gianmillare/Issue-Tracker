// set fs module to readFileSync to require fs
const fs = require('fs');

// set express to require express
const express = require('express');

// Create an apollo server object
const { ApolloServer } = require('apollo-server-express');

// the variable that we want to display: an about message
let aboutMessage = "Issue Tracker API v1.0";

// create functions following the schema that will be used when accessing the schema
const resolvers = {
    Query: {
        about: () => aboutMessage,
    },
    Mutation: {
        setAboutMessage,
    },
};

// define the function used in the resolvers above
function setAboutMessage(_, { message }) {
    return aboutMessage = message;
}

// initiate an apollo server that takes in the typedefs from schema.graphql and the resolvers above
const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
});

const app = express();

app.use(express.static('public'));

// install the apollo server as a middleware in Express
server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function() {
    console.log("App is running on localhost:3000!");
})