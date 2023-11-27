const reviewFeaturedData = require("./freaturedReview");

const featuredReviewCon = async (req, res) => {
    const reviewData = req.body
    try {
        const updatedFeatured = await reviewFeaturedData(reviewData);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = featuredReviewCon