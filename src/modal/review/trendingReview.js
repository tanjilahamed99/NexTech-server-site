const { model, Schema } = require("mongoose");
const TrendingReviewSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    featuredName: {
        type: String,
        required: true,
    },
    userPhoto: {
        type: String,
        required: true,
    },
    featuredId: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    }
})


const TrendingReview = model("TrendingReview", TrendingReviewSchema, "TrendingReview")

module.exports = TrendingReview