const getAllUsers = require("./getAllUsers");


const getAllUsersCon = async (req, res) => {
    try {
        const updatedFeatured = await getAllUsers();
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = getAllUsersCon