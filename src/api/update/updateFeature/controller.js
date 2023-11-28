const updateFeaturedAll = require("./updateFeature");

const updateFeatureAllCon = async (req, res) => {
    const id = req.params.id
    const newUpdate = req.body
    try {
        const updatedFeatured = await updateFeaturedAll(id, newUpdate);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = updateFeatureAllCon