const createUserCon = require('../../../api/users/controller')

const router = require('express').Router()

router.post('/users',createUserCon)

module.exports = router