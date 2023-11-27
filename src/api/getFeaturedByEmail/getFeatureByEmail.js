const Featured = require("../../modal/Fetured");

const findFeaturedByEmail = async (email) => {
    const query = { userEmail: email }
    const trendingItem = await Featured.find(query);
    return trendingItem;
}


module.exports = findFeaturedByEmail