const Featured = require("../../modal/Fetured");

const deleteFeaturedById = async (id) => {
    const query = { _id: id }
    const featuredItem = await Featured.deleteOne(query);
    return featuredItem;
}


module.exports = deleteFeaturedById