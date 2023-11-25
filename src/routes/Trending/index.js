const trendingData = require('../../api/trending/controller')

const router = require('express').Router()

router.get('/trending', trendingData)

module.exports = router