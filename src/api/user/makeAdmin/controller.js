const makeAdmin = require("./makeAdmin");


const makeAdminCon = async (req, res) => {
    const id = req.params.id
    try {
        const updatedFeatured = await makeAdmin(id);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = makeAdminCon