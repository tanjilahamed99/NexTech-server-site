const { model, Schema } = require("mongoose");
const BookmarkSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
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
    image: {
        type: String,
        required: true,
    },
    upvote: {
        type: Number
    },
    productsId: {
        type: String
    },
    upload_date: {
        type: Date,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
})


const Bookmark = model("Bookmark", BookmarkSchema, "bookmark")

module.exports = Bookmark