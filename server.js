const express = require("express");
const app = express();

//below is for cors and connecting to mongoDB
const connectDB = require('./config/db');
const cors = require('cors');
const path =require('path')


//Connect to Database
connectDB();

//EXPOSE PORT
const PORT = 6500;

//http://localhost:6500/graphql

//this is the graphql server include below
const {graphqlHTTP} = require("express-graphql");
const schema = require('./Schemas/index');


//Mutations: This is the same as CRUD (Create, Read,Update, Delete)
//Queries: How you fetch the data you need

//create our graphql server
//Remember GraphQL only has "one" entpoint, below is where you create your queries
app.use('/graphql',graphqlHTTP( {
  schema,
  graphiql:true
}));


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})