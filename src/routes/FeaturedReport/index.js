const reportFeature = require('../../api/reportFeature/controller')

const router = require('express').Router()

router.put('/featuredReport/:id',reportFeature)

module.exports = router
