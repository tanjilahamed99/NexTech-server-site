const findAllUserCon = require('../../../api/getUsers/controller')

const router = require('express').Router()

router.get('/users/:email',findAllUserCon)

module.exports = router