const featuredReviewCon = require('../../../api/review/getFeaturedReview/controller')

const router = require('express').Router()

router.get('/featuredReview/:id',featuredReviewCon)

module.exports = router