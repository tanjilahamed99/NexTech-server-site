const Bookmark = require("../../modal/Bookmark/Bookmark");
const getBookmark = async (email) => {
    const filter = { email: email }
    const cursor = await Bookmark.find(filter);
    return cursor
}

module.exports = getBookmark