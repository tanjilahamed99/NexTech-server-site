const updateAllFeaturedStatus = require("./uppdateFeature");

const UpdateAllFeaturedStatusCon = async (req, res) => {
    const id = req.params.id
    const updateStatus = req.body.status
    try {
        const allFeatured = await updateAllFeaturedStatus(id,updateStatus);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = UpdateAllFeaturedStatusCon