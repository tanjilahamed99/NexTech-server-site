const Trending = require("../../modal/trending");

const findTrendingById = async (itemId) => {
    const trendingItem = await Trending.findById(itemId);
    return trendingItem;
}


module.exports = findTrendingById