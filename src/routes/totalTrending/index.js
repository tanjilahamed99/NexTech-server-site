const Trending = require('../../modal/trending');
const router = require('express').Router()

router.get('/trendingData', async (req, res) => {
    const total = await Trending.countDocuments()
    res.send({ total: total })
})

module.exports = router