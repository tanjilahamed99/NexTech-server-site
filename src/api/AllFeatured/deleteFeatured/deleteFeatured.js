const { ObjectId } = require("mongodb");
const Featured = require("../../../modal/Fetured");
const deleteFeatured = async (id) => {
    const query = { _id: new ObjectId(id) }
    const updatedFeatured = await Featured.deleteOne(query)

    return updatedFeatured;
}

module.exports = deleteFeatured