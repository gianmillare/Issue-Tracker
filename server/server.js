// set fs module to readFileSync to require fs
const fs = require('fs');

// set express to require express
const express = require('express');

// Create an apollo server object, include UserInputError into the apollo server as well
const { ApolloServer, UserInputError } = require('apollo-server-express');

// create a graphql scalar object
const { GraphQLScalarType } = require('graphql');

// create an object for graphql language
const { Kind } = require('graphql/language');

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
    parseValue(value) {
        const dateValue = new Date(value);
        return isNaN(dateValue) ? undefined : dateValue;
    },
    parseLiteral(ast) {
        if (ast.kind == Kind.STRING) {
            const value = new Date(ast.value);
            return isNaN(value) ? undefined : value;
        }
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
        issueAdd,
    },
    GraphQLDate,
};

// define the function used in the resolvers above
function setAboutMessage(_, { message }) {
    return aboutMessage = message;
}

// Call the issueList function to return the database holding all issues
function issueList() {
    return issuesDB;
}

// input the function that will launch UserInputError from apollo server
function issueValidate(issue) {
    const errors = [];
    if (issue.title.length < 3) {
        errors.push('Field "title" must be at least 3 characters long.')
    }
    if (issue.status == "Assigned" && !issue.owner) {
        errors.push('Field "owner" is required when issue is Assigned.');
    }
    if (errors.length > 0) {
        throw new UserInputError('Invalid input(s), {errors}');
    }
}

// issueAdd function to add new issues
function issueAdd(_, { issue }) {
    issueValidate(issue);
    issue.created = new Date();
    issue.id = issuesDB.length + 1;
    issuesDB.push(issue);
    return issue;
}

async function graphQLFetch(query, variables = {}) {
    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });
    }
}

// initiate an apollo server that takes in the typedefs from schema.graphql and the resolvers above
const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    }
});

const app = express();

app.use(express.static('public'));

// install the apollo server as a middleware in Express
server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function() {
    console.log("App is running on localhost:3000!");
})