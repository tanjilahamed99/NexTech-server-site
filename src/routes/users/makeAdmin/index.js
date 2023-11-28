const makeAdminCon = require('../../../api/user/makeAdmin/controller')

const router = require('express').Router()

router.patch('/makeAdmin/:id', makeAdminCon)

module.exports = router