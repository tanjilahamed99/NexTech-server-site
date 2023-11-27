const TrendingReview = require("../../../modal/review/trendingReview");

const reviewTrendingData = async (reviewData) => {
    const updatedFeatured = await TrendingReview.create(reviewData)
    return updatedFeatured;
}

module.exports = reviewTrendingData