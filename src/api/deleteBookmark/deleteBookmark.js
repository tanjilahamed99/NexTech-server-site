const { ObjectId } = require("mongodb");
const Bookmark = require("../../modal/Bookmark/Bookmark");
const deleteBookmark = async (id) => {
    const filter = { _id: new ObjectId(id) }
    const cursor = await Bookmark.deleteOne(filter);
    return cursor
}

module.exports = deleteBookmark