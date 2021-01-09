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

const db = {
    profiles: [
        {
            id: 1,
            description: "Perfil 1"
        },
        {
            id: 2,
            description: "Profile 2"
        }
    ],
    users: [
        {
            id: 1,
            salary: 2836.15,
            name: "Pedro",
            active: true,
            age: 18,
            phone_fixed: "44 9988 1155",
            profile: 1
        },
        {
            id: 2,
            salary: 2236.15,
            name: "Lucas",
            active: false,
            age: 19,
            phone_fixed: "44 9988 1166",
            profile: 2
        }
    ],
    products: [
        {
            id: 1,
            name: "Product -",
            value: 422.55
        },
        {
            id: 2,
            name: "Product A",
            value: 155.55
        },
        {
            id: 3,
            name: "Product B",
            value: 1455.55
        }
    ]
};

const typeDefs = gql`
    
    type Profile {
        id: Int,
        description: String
    }

    type Product {
        id: ID
        name: String
        value: Float
    }

    type User {
        age: Int
        salary: Float
        name: String
        active: Boolean
        id: ID
        phone: String
        profile: Profile
    }

    type Query {
        user(id: Int, name: String): User
        users: [User!]!
        product(id: Int, name: String): Product
        products: [Product!]!
        profiles: [Profile]
    }
`;

const resolvers = {
    User: {
        phone(obj) {
            return obj.phone_fixed;
        },
        profile(obj) {
            return db.profiles.find(p => p.id == obj.profile);
        }
    },
    Query: {
        user(obj, args) {
            const { id, name } = args;
            if (id)
                return db.users.find(user => user.id == id);

            return db.users.find(user => user.name == name);
        },
        product(obj, args) {
            const { id, name } = args;
            if (id)
                return db.products.find(product => product.id == id);

            return db.products.find(product => product.name == name);
        },
        products() {
            return db.products;
        },
        users() {
            return db.users;
        },
        profiles: () => db.profiles,
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(); 