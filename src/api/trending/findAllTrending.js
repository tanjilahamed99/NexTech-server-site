const Trending = require("../../modal/trending");

const findAllTrending = async (page, search) => {
    let query = {}
    if (search !== 'undefined' ) {
        query.tags = { $in: search.split(',') }
    }
    const cursor = await Trending.find(query).sort({ upVote: -1 }).skip(page * 20).limit(20);
    return cursor
}

module.exports = findAllTrending