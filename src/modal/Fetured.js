const { model, Schema } = require("mongoose");
const FeaturedSchema = new Schema({
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
        default: Date.now,
    },
    upvote: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        required: true,
    },
})


const Featured = model("Featured", FeaturedSchema,"featured")

module.exports = Featured