const findAllFeatured = require("./FindAllFeatured")

const featuredData = async (req, res) => {
    try {
        const allFeatured = await findAllFeatured();
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = featuredData