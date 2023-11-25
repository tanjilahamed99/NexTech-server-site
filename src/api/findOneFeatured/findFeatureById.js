const Featured = require("../../modal/Fetured");

const findFeaturedById = async (itemId) => {
    const featuredItem = await Featured.findById(itemId);
    return featuredItem;
}


module.exports = findFeaturedById