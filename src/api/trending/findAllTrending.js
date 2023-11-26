const Trending = require("../../modal/trending");

const findAllTrending = async (page) => {
    console.log(page)
    const cursor = await Trending.find().sort({ upVote: -1 }).skip(page*20).limit(20);
    return cursor
}

module.exports = findAllTrending