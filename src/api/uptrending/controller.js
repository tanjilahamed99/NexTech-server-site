const updateTrendingVote = require("./uptrendingVote");

const upTrendingVoteCon = async (req, res) => {
    const id = req.query.id
    const upVote = parseInt(req.query.upVote)
    const newVote = upVote + 1 
    try {
        const updatedFeatured = await updateTrendingVote(id,newVote);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = upTrendingVoteCon