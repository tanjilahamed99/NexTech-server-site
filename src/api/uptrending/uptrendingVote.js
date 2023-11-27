const Trending = require("../../modal/trending");

const updateTrendingVote = async (id, newUpVote) => {

    const updatedTrending = await Trending.findOneAndUpdate(
        { _id: id },
        { $set: { upVote: newUpVote } },
        { new: true }
    );

    return updatedTrending;
}

module.exports = updateTrendingVote