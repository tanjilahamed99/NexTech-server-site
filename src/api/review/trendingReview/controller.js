const reviewTrendingData = require("./trendingReview");


const trendingReviewCon = async (req, res) => {
    const reviewData = req.body
    try {
        const updatedFeatured = await reviewTrendingData(reviewData);
        res.send(updatedFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = trendingReviewCon