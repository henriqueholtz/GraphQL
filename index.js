const { gql, ApolloServer } = require("apollo-server");

/*
Default port: 4000

* Scalar Types
* - Int
* - Float
* - String
* - Boolean
* - ID
*/

const typeDefs = gql`
    type Query {
        age: Int
        salary: Float
        name: String
        active: Boolean
        id: ID
}`;

const resolvers = {
    Query: {
        age() { return 18; },
        salary() { return 2836.10; },
        name() { return "Henrique Holtz"; },
        active() { return true; },
        id() { return 1234567; }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(); 