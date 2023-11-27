const updateUserCon = require('../../../api/updateUsers/controller')

const router = require('express').Router()

router.patch('/users',updateUserCon)

module.exports = router