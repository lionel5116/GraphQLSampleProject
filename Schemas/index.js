const graphql  = require("graphql");
const {GraphQLObjectType,
                GraphQLSchema,
                GraphQLInt,
                GraphQLString,
                GraphQLFloat,
                GraphQLList} = graphql;

      
//FAKE DATA - THIS WOULD NORMALLY BE COMMING FROM A DATABASE
const userData = require("../MOCK_DATA.json");

const UserType = require('./TypeDefs/UserType');
const TravelType = require('./TypeDefs/TravelType');
const Travel = require('../models/Travel');


async function getTravelDetails() {
    travelRecord = await Travel.find();
    return travelRecord;
}
//CREATE QUERIE(S)
//Remember GraphQL only has "one" entpoint, below is where you create your queries
const RootQuery = new GraphQLObjectType( {
    name:"RootQueryType",
    fields: {
       //below is a query called getAllUsers
       getAllUsers:{ 
         type: new GraphQLList(UserType) , //list of users - the type is defined above for our user
         args:{id: {type: GraphQLInt}},
         
         //the resolve function is where you would make your database call, i:e SELECT * .. or with MongoDB db.findByID (...)
         resolve(parent,args) {
            return userData   //this is the MOCK_DATA.json data
         }
       },
       getAllTravelData:{ 
        type: new GraphQLList(TravelType) , 
        args:{id: {type: GraphQLString}},
        
        //the resolve function is where you would make your database call, i:e SELECT * .. or with MongoDB db.findByID (...)
        resolve(parent,args) {
           return getTravelDetails() ;   
        }
      },
       //If i wanted to create another query, it would be below here seperated by a , i:e getUserByID
    }
});


//CREATE MUTATION
const Mutation = new GraphQLObjectType ( {
    name: "Mutation",
    fields: {
        createUser: {
            type:UserType,
            args:{
                first_name:{type: GraphQLString},
                last_name:{type: GraphQLString},
                email:{type: GraphQLString},
                gender:{type: GraphQLString}, 
            },
            resolve(parent,args) {
               //THIS IS WHERE YOU PUT YOUR MUTATION LOGIC, INSERT,DELETE,UPDATE ... 
               userData.push({id:userData.length + 1,
                            first_name: args.first_name,
                            last_name: args.last_name,
                            email: args.email,
                            gender: args.gender
                        })
                        return args
            }//resolve

        }
    }
});


//create our schema
module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});