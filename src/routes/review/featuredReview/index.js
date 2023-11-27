const featuredReviewCon = require('../../../api/review/featured/controller')

const router = require('express').Router()

router.post('/featuredReview',featuredReviewCon)

module.exports = router