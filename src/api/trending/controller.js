const findAllTrending = require("./findAllTrending");

const trendingData = async (req, res) => {
    try {
        const allFeatured = await findAllTrending();
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = trendingData