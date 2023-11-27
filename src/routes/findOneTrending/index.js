const findOneTrendingCon = require('../../api/findOneTrending/controller')

const router = require('express').Router()

router.get('/trending/:id',findOneTrendingCon)

module.exports = router