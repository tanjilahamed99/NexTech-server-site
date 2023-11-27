const upTrendingVoteCon = require('../../api/uptrending/controller')

const router = require('express').Router()

router.patch('/trending',upTrendingVoteCon)

module.exports = router