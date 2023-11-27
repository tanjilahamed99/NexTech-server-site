const findAllUsers = require("./getUser");

const findAllUserCon = async (req, res) => {
    const email = req.params.email
    try {
        const allFeatured = await findAllUsers(email);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = findAllUserCon