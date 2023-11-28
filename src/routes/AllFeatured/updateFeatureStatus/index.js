const UpdateAllFeaturedStatCon = require('../../../api/AllFeatured/updateFeatureStatus/controller')

const router = require('express').Router()

router.patch('/allFeaturedStatus/:id', UpdateAllFeaturedStatCon)

module.exports = router
