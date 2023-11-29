const AllFeaturedDataCon = require('../../../api/AllFeatured/AllFeatured/controller')
const verifyToken = require('../../../middleWers/verifyToken')

const router = require('express').Router()

router.get('/allFeatured',verifyToken,AllFeaturedDataCon)

module.exports = router
