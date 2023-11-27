const findFeatureByEmailCon = require('../../api/getFeaturedByEmail/controller')

const router = require('express').Router()

router.get('/featuredEmail/:email',findFeatureByEmailCon)

module.exports = router