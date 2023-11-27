const trendingReviewCon = require('../../../api/review/getTrendingReview/controller')

const router = require('express').Router()

router.get('/trendingReview/:id',trendingReviewCon)

module.exports = router