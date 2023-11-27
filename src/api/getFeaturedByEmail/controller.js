const findFeaturedByEmail = require("./getFeatureByEmail");


const findFeatureByEmailCon = async (req, res) => {
    const email = req.params.email
    try {
        const allFeatured = await findFeaturedByEmail(email);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = findFeatureByEmailCon