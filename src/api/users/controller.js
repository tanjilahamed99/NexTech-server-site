const createUsers = require("./users");

const createUserCon = async (req, res) => {
    const newUser = req.body
    try {
        const updatedFeatured = await createUsers(newUser);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = createUserCon