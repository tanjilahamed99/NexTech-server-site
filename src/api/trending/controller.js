const findAllTrending = require("./findAllTrending");

const trendingData = async (req, res) => {
    const page = req?.query.page
    try {
        const allFeatured = await findAllTrending(page);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = trendingData