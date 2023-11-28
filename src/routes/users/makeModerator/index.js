const makeModeratorCon = require('../../../api/user/makeModerator/controller')
const router = require('express').Router()

router.patch('/makeModerator/:id', makeModeratorCon)

module.exports = router