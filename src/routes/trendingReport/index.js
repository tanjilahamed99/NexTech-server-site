const reportTrending = require('../../api/reportTrending/controller')

const router = require('express').Router()

router.put('/trendingReport/:id',reportTrending)

module.exports = router
