const postFeatured = require("./postFeature");


const postFeaturedDataCon = async (req, res) => {

    const newProducts = req.body
    try {
        const allFeatured = await postFeatured(newProducts);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = postFeaturedDataCon