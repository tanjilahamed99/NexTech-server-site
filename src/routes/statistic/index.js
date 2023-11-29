const postFeaturedDataCon = require('../../api/postFeatured/controller')
const verifyToken = require('../../middleWers/verifyToken')
const Featured = require('../../modal/Fetured')
const Trending = require('../../modal/trending')
const Users = require('../../modal/users/user')

const router = require('express').Router()

router.get('/statistic', verifyToken, async (req, res) => {
    const query = { reported: true }
    const allFeatured = await Featured.estimatedDocumentCount()
    const allTrending = await Trending.estimatedDocumentCount()
    const users = await Users.estimatedDocumentCount()
    const featuredReport = await Featured.find(query)
    const trendingReport = await Trending.find(query)

    return res.send({ allFeatured, allTrending, users, featuredReport: featuredReport.length, trendingReport: trendingReport.length })
})

module.exports = router