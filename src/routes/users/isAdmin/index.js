const isAdminCon = require('../../../api/user/isAdmin/controller')


const router = require('express').Router()

router.get('/isAdmin/:email',isAdminCon)

module.exports = router