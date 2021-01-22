module.exports = {
    profiles: [
        {
            id: 1,
            description: "ADMIN"
        },
        {
            id: 2,
            description: "NORMAL"
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
}