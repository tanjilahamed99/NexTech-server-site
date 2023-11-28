const updateFeatureAllCon = require('../../api/update/updateFeature/controller')


const router = require('express').Router()

router.patch('/updateFeatured/:id',updateFeatureAllCon)

module.exports = router