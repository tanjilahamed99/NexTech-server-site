const getBookmark = require("./getBookmark")

const getBookmarkCon = async (req, res) => {

    const email = req.params.email

    try {
        const allFeatured = await getBookmark(email);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = getBookmarkCon