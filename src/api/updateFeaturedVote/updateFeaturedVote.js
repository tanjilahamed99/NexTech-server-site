const updateVote = require("./upFeaturedInfo");

const updateUpvote = async (req, res) => {
    const id = req.query.id
    const upvote = parseInt(req.query.upvote)
    const newVote = upvote + 1 
    try {
        const updatedFeatured = await updateVote(id,newVote);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = updateUpvote