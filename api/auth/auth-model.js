const db = require('../data/db-config')

const getAll = () => {
    return db('users')

}

const findBy = (filter) => {
    return db('users')
    .where(filter).first()
}

module.exports = {
    findBy,
    getAll,
}