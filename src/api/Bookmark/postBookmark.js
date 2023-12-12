const Bookmark = require("../../modal/Bookmark/Bookmark");
const postBookmark = async (newBookmark) => {
    const cursor = await Bookmark.create(newBookmark);
    return cursor
}

module.exports = postBookmark