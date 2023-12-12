const express = require('express');
const useMiddleWere = require('./middleWers/useMiddleWere');
const connectDB = require('./db/cannectDB/cannectDB');
const jwt = require('jsonwebtoken')
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_KEY)
const app = express()
const port = process.env.PORT || 5000
const featured = require('./routes/featured')
const updatedFeatured = require('./routes/upFeaturedRoute')
const findOneFeatured = require('./routes/findOneFeatured')
const trending = require('./routes/Trending')
const totalTrendingData = require('./routes/totalTrending')
const reportFeature = require('./routes/FeaturedReport')
const updateTrending = require('./routes/upTrending')
const findOneTrending = require('./routes/findOneTrending')
const trendingReport = require('./routes/trendingReport')
const featuredReview = require('./routes/review/featuredReview')
const findFeatureReview = require('./routes/review/getFeaturedReview')
const trendingReview = require('./routes/review/trendingReview')
const findTrendingReview = require('./routes/review/getTrendingReview')
const users = require('./routes/AllUserRoutes/users')
const updateUser = require('./routes/AllUserRoutes/updateUser')
const getUser = require('./routes/AllUserRoutes/getUsers')
const postFeatured = require('./routes/postFeatured')
const findFeaturedByEmail = require('./routes/getFeaturedMyEmail')
const deleteFeatured = require('./routes/deleteFeatured')
const updatedFeaturedAll = require('./routes/updateFeature')
const AllFeaturedData = require('./routes/AllFeatured/AllFeaturedProducts')
const updateAllFeaturedStatus = require('./routes/AllFeatured/updateFeature')
const updateAllFeaturedStat = require('./routes/AllFeatured/updateFeatureStatus')
const deleteFeature = require('./routes/AllFeatured/deleteFeatured')
const getAllUsers = require('./routes/users/getAllUsers')
const makeAdmin = require('./routes/users/makeAdmin')
const makeModerator = require('./routes/users/makeModerator')
const isAdmin = require('./routes/users/isAdmin')
const statistic = require('./routes/statistic')
const createCoupon = require('./routes/coupon/CreateCoupon')
const getAllCoupon = require('./routes/coupon/getAllCoupon')
const deleteCoupon = require('./routes/coupon/deleteCoupon')
const getOneCoupon = require('./routes/coupon/getOneCoupon')
const updateCoupon = require('./routes/coupon/updateCoupon')
const postBookmark = require('./routes/Bookmark/bookmark')
const getBookmark = require('./routes/Bookmark/getAllBookmark')
const deleteBookmark = require('./routes/Bookmark/deleteBookmark')

useMiddleWere(app)
app.use(featured)
app.use(getAllCoupon)
app.use(postBookmark)
app.use(deleteBookmark)
app.use(getBookmark)
app.use(updateCoupon)
app.use(getOneCoupon)
app.use(deleteCoupon)
app.use(createCoupon)
app.use(statistic)
app.use(updateAllFeaturedStatus)
app.use(deleteFeature)
app.use(isAdmin)
app.use(makeAdmin)
app.use(makeModerator)
app.use(getAllUsers)
app.use(updateAllFeaturedStat)
app.use(updatedFeatured)
app.use(findOneFeatured)
app.use(trending)
app.use(totalTrendingData)
app.use(reportFeature)
app.use(updateTrending)
app.use(findOneTrending)
app.use(trendingReport)
app.use(featuredReview)
app.use(findFeatureReview)
app.use(trendingReview)
app.use(findTrendingReview)
app.use(users)
app.use(updateUser)
app.use(getUser)
app.use(postFeatured)
app.use(findFeaturedByEmail)
app.use(deleteFeatured)
app.use(updatedFeaturedAll)
app.use(AllFeaturedData)


app.get('/health', (req, res) => {
    res.send('welcome to my nexTech server ')
})

app.post('/jwt', (req, res) => {
    const email = req.body
    const token = jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '5h' })
    return res.send({ token })
})


app.post("/create-payment-intent", async (req, res) => {

    const { price } = req.body;
    const amount = (price * 100)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ['card']
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});


app.all('*', (req, res, next) => {
    const error = new Error(`${req.url} is not a valid url`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


module.exports = app