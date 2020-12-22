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
        id: 2, status: "New", owner: "Garvyn", effort: 2, created: new Date("2020-12-11"), 
        due: new Date("2020-12-20"), title: "Borders around the issue table is missing.",
    },
    {
        id: 3, status: "Assigned", owner: "Calvin", effort: 8, created: new Date("2020-12-02"), 
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
    console.log("Head to localhost:3000 to witness the app!");
})

// MongoDB Notes: Maintenance
// To install: brew install mongodb-community@4.4
// To update: brew upgrade mongodb/brew/mongodb-community
// To start connection: brew services start mongodb-community
// To start mongo: mongo
// To display databases: show databases
// To dispaly collections: show collections
// To create a database: use issuetracker

// MongoDB Notes: Command Line actions
// To start a collection/documents: db.employees.insertOne({ name: { first: 'John', last: 'Doe' }, age: 30 })
// To show a collection and data: db.employees.find() -----> db.employees.find().pretty()

// MongoDB Notes: Creating variables and arrays in MongoDB
// To create an (array) variable: let result = db.employees.find().toArray()
// To output variables: result.forEach((e) => print('First Name:', e.name.first))
// To output entire variable objects (parsed): result.forEach((e) => printjson(e.name))

// CRUD: Create Read Update Delete

// CREATE
// To delete collections: db.employees.drop()
// To insert new data with personalized ID --> include "_id: ####" as one of the fields
// To create many documents: db.employees.insertMany([
    // { _id: 3, name: {first: 'Harry', last: 'Larry' }, age: 12 },
    // { _id: 4, name: {first: 'Mary', last: 'Carrie' }, age: 14 }
// ])

// READ ----> structure -----> fieldname: { operator: value }
// To read a specific entry: db.employees.findOne({ id: 1 })
// Filtering: greater than or equal to ----> db.employees.find({ age: { $gte: 30 } })
// Filtering: greater than or equal to w/ multiple field ----> db.employees.find({ age: { $gte:30 }, 'name.last': 'Doe' })
// Creating an index: db.employees.createIndex({ age: 1 })

// UPDATE
// There are two main kinds of updates: updateOne() and updateMany()
// Update One: db.employees.updateOne({ id: 2 }, { $set: { age: 23 }})