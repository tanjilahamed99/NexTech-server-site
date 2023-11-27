const FeaturedReview = require("../../../modal/review/featuredReview");

const reviewFeaturedData = async (reviewData) => {
    const updatedFeatured = await FeaturedReview.create(reviewData)
    return updatedFeatured;
}

module.exports = reviewFeaturedData