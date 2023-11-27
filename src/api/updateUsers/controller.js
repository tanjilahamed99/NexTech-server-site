const updateUser = require("./updateuser");


const updateUserCon = async (req, res) => {
    const email = req.body.email
    try {
        const updatedFeatured = await updateUser(email);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = updateUserCon