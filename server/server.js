// set fs module to readFileSync to require fs
const fs = require('fs');

// set express to require express
const express = require('express');

// Create an apollo server object
const { ApolloServer } = require('apollo-server-express');

// create a graphql scalar object
const { GraphQLScalarType } = require('graphql');

// the variable that we want to display: an about message
let aboutMessage = "Issue Tracker API v1.0";

// Include the Query field from the schema file
const issuesDB = [
    {
        id: 1, status: "New", owner: "Kevin", effort: 5, created: new Date("2020-12-08"), 
        due: new Date("2020-12-10"), title: "Users are unable to add new issues.",
    },
    {
        id: 2, status: "New", owner: "Christian", effort: 2, created: new Date("2020-12-11"), 
        due: new Date("2020-12-20"), title: "Borders around the issue table is missing.",
    },
    {
        id: 3, status: "Completed", owner: "Calvin", effort: 8, created: new Date("2020-12-02"), 
        due: undefined, title: "Registration page leads to blank page after registering.",
    },
];

// create a function that passes the graphqldate and changes the string dates to actual dates
const GraphQLDate = new GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'A Date() type in GraphQL as a scalar',
    serialize(value) {
        return value.toISOString();
    },
});

// create functions following the schema that will be used when accessing the schema
const resolvers = {
    Query: {
        about: () => aboutMessage,
        issueList,
    },
    Mutation: {
        setAboutMessage,
    },
};

// define the function used in the resolvers above
function setAboutMessage(_, { message }) {
    return aboutMessage = message;
}

// Call the issueList function to return the database holding all issues
function issueList() {
    return issuesDB;
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