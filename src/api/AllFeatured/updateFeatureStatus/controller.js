const updateAllFeaturedStat = require("./status");
const UpdateAllFeaturedStatCon = async (req, res) => {
    const id = req.params.id
    const updateStatus = req.body.status
    try {
        const allFeatured = await updateAllFeaturedStat(id,updateStatus);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = UpdateAllFeaturedStatCon