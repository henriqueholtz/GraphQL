const db = require('../../../db')

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
    }
}