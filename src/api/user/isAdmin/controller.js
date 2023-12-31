const userRole = require("./userRole");

const isAdminCon = async (req, res) => {
    const email = req.params.email
    try {
        const updatedFeatured = await userRole(email);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = isAdminCon