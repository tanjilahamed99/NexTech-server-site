const updateVote = require("./upFeaturedInfo");

const updateUser = async (req, res) => {
    const email = req.body.email
    console.log(email)
    // try {
    //     const updatedFeatured = await ();
    //     res.send(updatedFeatured);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send('Internal Server Error');
    // }
};

module.exports = updateUser