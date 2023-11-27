const TrendingReview = require("../../../modal/review/trendingReview");

const trendingReview = async (id) => {
    const query = { featuredId: id }
    const cursor = await TrendingReview.find(query);
    return cursor
}

module.exports = trendingReview