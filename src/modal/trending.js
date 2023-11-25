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
        type: Date,
        default: Date,
    },
    upVote: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        required: true,
    },
})


const Trending = model("Trending", TrendingSchema,"trending")

module.exports = Trending