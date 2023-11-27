const featuredReview = require("./getFeaturedReview")

const featuredReviewCon = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const allFeatured = await featuredReview(id);
        res.send(allFeatured);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = featuredReviewCon