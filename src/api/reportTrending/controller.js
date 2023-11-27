const reportTrendingData = require("./reportTrending");


const reportTrending = async (req, res) => {
    const id = req.params.id
    try {
        const updatedFeatured = await reportTrendingData(id);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = reportTrending