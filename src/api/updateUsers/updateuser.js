const Featured = require("../../modal/Fetured");

const updateVote = async (id, newUpvote) => {

    const updatedFeatured = await Featured.findOneAndUpdate(
        { _id: id },
        { $set: { upvote: newUpvote } },
        { new: true }
    );

    return updatedFeatured;
}

module.exports = updateVote