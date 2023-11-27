const trendingReviewCon = require('../../../api/review/trendingReview/controller')

const router = require('express').Router()

router.post('/trendingReview',trendingReviewCon)

module.exports = router