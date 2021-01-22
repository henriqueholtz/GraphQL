const db = require('../../../db')

function generateID(list) {
    let newId;
    let last = list[list.length -1];
    if (!last) {
        newId = 0;
    }
    else {
        newId = last.id
    }
    return ++newId;
}

module.exports = {
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
        users() {
            return db.users;
        },
    },
    Mutation: {
        createUser(_, args) {
            const {name} = args;

            const existsUser = db.users.some(u => u.name === name);
            if (existsUser) {
                throw new Error(`Duplicate user: ${name}`);
            }

            const newUser = {
                ...args,
                id: generateID(db.users),
                profile_id: 2
            }

            db.users.push(newUser)
            return newUser
        }
    }
}