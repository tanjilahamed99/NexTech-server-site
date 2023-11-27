const { model, Schema } = require("mongoose");
const FeaturedReviewSchema = new Schema({
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
        type: String,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    }
})


const FeaturedReview = model("FeaturedReview", FeaturedReviewSchema, "FeaturedReview")

module.exports = FeaturedReview