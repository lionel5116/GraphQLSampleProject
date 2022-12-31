const graphql  = require("graphql");
const {GraphQLObjectType,
                GraphQLInt,
                GraphQLFloat,
                GraphQLString,
} = graphql;


//Create a type definition for a user
const TravelType = new GraphQLObjectType({
    name:"Travel",
    fields: ()=> ({
        id:{type: GraphQLString},
        Destination:{ type: GraphQLString},
        Year:{ type: GraphQLString},
        TravelDate:{ type: GraphQLString},
        Airline:{ type: GraphQLString},
        Hotel:{ type: GraphQLString},
        BookingCode:{ type: GraphQLString},
        APCode:{ type: GraphQLString},
        ItineraryFlght:{ type: GraphQLString},
        ItineraryHotel:{ type: GraphQLString},
        Status:{ type: GraphQLString},
        FlightCost:{ type: GraphQLFloat},
        HotelCost:{ type: GraphQLFloat},
        GirlCost:{ type: GraphQLFloat},
        TotalCost:{ type: GraphQLFloat},
        Rating:{ type: GraphQLString},
        Notes:{ type: GraphQLString}
    })
})

module.exports = TravelType