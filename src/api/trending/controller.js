const findAllTrending = require("./findAllTrending");

const trendingData = async (req, res) => {
    const page = req.query.page
    const search = req.query.search
    try {
        const allFeatured = await findAllTrending(page,search);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = trendingData