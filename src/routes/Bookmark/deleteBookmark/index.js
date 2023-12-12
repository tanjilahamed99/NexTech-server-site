const deleteBookmarkCon = require('../../../api/deleteBookmark/controller')

const router = require('express').Router()

router.delete('/bookmark/:id', deleteBookmarkCon)

module.exports = router