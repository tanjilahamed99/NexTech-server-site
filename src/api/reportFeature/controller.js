const reportFeatureData = require("./reportFeature");

const reportFeature = async (req, res) => {
    const id = req.params.id
    try {
        const updatedFeatured = await reportFeatureData(id);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = reportFeature