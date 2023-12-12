const postBookmark = require("./postBookmark");

const postBookmarkCon = async (req, res) => {
    const newBookmark = req.body
    try {
        const allFeatured = await postBookmark(newBookmark);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = postBookmarkCon