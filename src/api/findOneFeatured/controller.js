const findFeaturedById = require("./findFeatureById");

const findOneFeaturedCon = async (req, res) => {
    const id = req.params.id
    try {
        const allFeatured = await findFeaturedById(id);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = findOneFeaturedCon