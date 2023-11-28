const makeModerator = require("./makeModerator");


const makeModeratorCon = async (req, res) => {
    const id = req.params.id
    try {
        const updatedFeatured = await makeModerator(id);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = makeModeratorCon