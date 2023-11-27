const updateUser = require('../../../api/updateUsers/controller')

const router = require('express').Router()

router.patch('/users',updateUser)

module.exports = router