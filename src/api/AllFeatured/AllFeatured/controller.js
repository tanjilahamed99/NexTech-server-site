const AllFeaturedData = require("./allFeatured");

const AllFeaturedDataCon = async (req, res) => {
    try {
        const updatedFeatured = await AllFeaturedData();
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = AllFeaturedDataCon