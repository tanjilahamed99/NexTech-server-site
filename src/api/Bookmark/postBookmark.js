const Bookmark = require("../../modal/Bookmark/Bookmark");
const postBookmark = async (newBookmark) => {

    const id = newBookmark.productsId
    const email = newBookmark.email
    const filter = {
        productsId: id,
        email: email
    }
    const exist = await Bookmark.findOne(filter)

    if (!exist) {
        const cursor = await Bookmark.create(newBookmark);
        return cursor
    }
    return { Already: true }

}

module.exports = postBookmark