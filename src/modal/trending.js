const { model, Schema } = require("mongoose");
const TrendingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    upload_date: {
        type: Date
    },
    upVote: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        required: true,
    },
    reported: {
        type: Boolean
    }
})


const Trending = model("Trending", TrendingSchema, "trending")

module.exports = Trending