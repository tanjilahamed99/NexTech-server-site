const trendingReview = require("./getTrendingReview");

const trendingReviewCon = async (req, res) => {
    const id = req.params.id
    try {
        const allFeatured = await trendingReview(id);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = trendingReviewCon