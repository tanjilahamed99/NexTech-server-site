const deleteFeatured = require("./deleteFeatured");

const deleteFeaturedCon = async (req, res) => {
    const id = req.params.id
    try {
        const allFeatured = await deleteFeatured(id);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = deleteFeaturedCon