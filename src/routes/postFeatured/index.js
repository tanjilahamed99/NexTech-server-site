const postFeaturedDataCon = require('../../api/postFeatured/controller')

const router = require('express').Router()

router.post('/featured', postFeaturedDataCon)

module.exports = router