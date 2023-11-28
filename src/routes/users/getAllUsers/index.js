const getAllUsersCon = require('../../../api/user/getAllUsers/controller')

const router = require('express').Router()

router.get('/users', getAllUsersCon)

module.exports = router