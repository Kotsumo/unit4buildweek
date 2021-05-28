const db = require('../data/db-config')

const getAll = () => {
    return db('users')

}

const findBy = (filter) => {
    return db('users')
    .where(filter).first()
}

const addUser = (user) => {
    return db('users')
    .insert({ 'username': user.username, 'role': user.role, 'item': user.item })
    .then(res => {
        return findBy(user.username, user.role)
    })
}

module.exports = {
    findBy,
    getAll,
    addUser,
}