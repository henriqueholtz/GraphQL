const {  ApolloServer } = require("apollo-server");
const graphql = require('./src/GraphQL')


const server = new ApolloServer({
    ...graphql,
    formatError: (err) => {
        if(err.message.startsWith("Duplicate user")) {
            return new Error(err.message)
        }
    }
});

server.listen().then(({url}) => console.log(url)); 