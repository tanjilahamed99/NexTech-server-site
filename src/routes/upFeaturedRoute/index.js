const updateUpvote = require('../../api/updateFeaturedVote/updateFeaturedVote')

const router = require('express').Router()

router.patch('/featured',updateUpvote)

module.exports = router