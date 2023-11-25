const Trending = require("../../modal/trending");

const findAllTrending = async () => {
    const cursor = await Trending.find().sort({ upVote: -1 });
    return cursor
}

module.exports = findAllTrending