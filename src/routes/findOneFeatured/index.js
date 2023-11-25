const findOneFeaturedCon = require('../../api/findOneFeatured/controller')

const router = require('express').Router()

router.get('/featured/:id',findOneFeaturedCon)

module.exports = router