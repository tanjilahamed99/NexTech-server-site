const deleteBookmark = require("./deleteBookmark");


const deleteBookmarkCon = async (req, res) => {

    const id = req.params.id
    try {
        const allFeatured = await deleteBookmark(id);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = deleteBookmarkCon