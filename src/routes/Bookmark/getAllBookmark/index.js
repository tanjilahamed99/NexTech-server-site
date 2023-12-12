const getBookmarkCon = require('../../../api/getBookmark/controlar')

const router = require('express').Router()

router.get('/bookmark/:email', getBookmarkCon)

module.exports = router