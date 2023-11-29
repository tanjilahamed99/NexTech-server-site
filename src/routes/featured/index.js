const featuredData = require('../../api/fetured/controler')

const router = require('express').Router()

router.get('/featured', featuredData)

module.exports = router
