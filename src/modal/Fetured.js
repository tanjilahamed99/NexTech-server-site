const { model, Schema } = require("mongoose");
const FeaturedSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userPhoto: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    desc: {
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
    upvote: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        required: true,
    },
    reported: {
        type: Boolean
    },
    featured: {
        type: Boolean
    },
    status: {
        type: String
    },
    
})


const Featured = model("Featured", FeaturedSchema, "featured")

module.exports = Featured