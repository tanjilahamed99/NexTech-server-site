const UpdateAllFeaturedStatusCon = require('../../../api/AllFeatured/updateFeatured/controller')

const router = require('express').Router()

router.patch('/allFeatured/:id', UpdateAllFeaturedStatusCon)

module.exports = router
