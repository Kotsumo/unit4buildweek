const router = require("express").Router()
const Users = require('./auth-model')

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.getAll()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
} )

module.exports = router