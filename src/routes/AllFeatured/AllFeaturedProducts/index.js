const AllFeaturedDataCon = require('../../../api/AllFeatured/AllFeatured/controller')

const router = require('express').Router()

router.get('/allFeatured',AllFeaturedDataCon)

module.exports = router
