const FeaturedReview = require("../../../modal/review/featuredReview");

const featuredReview = async (id) => {
    const query = { featuredId: id }
    const cursor = await FeaturedReview.find(query);
    return cursor
}

module.exports = featuredReview