const db = require('../../../db')

module.exports = {
    Query: {
        product(obj, args) {
            const { id, name } = args;
            if (id)
                return db.products.find(product => product.id == id);

            return db.products.find(product => product.name == name);
        },
        products() {
            return db.products;
        },
    }
}