const postBookmarkCon = require('../../../api/Bookmark/controller')

const router = require('express').Router()

router.post('/bookmark',postBookmarkCon )

module.exports = router