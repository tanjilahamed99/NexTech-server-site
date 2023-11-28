const { ObjectId } = require("mongodb");
const Featured = require("../../../modal/Fetured");
const updateAllFeaturedStatus = async (id,updateStatus) => {

    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            featured: updateStatus
        }
    }

    const updatedFeatured = await Featured.updateOne(query, updateDoc)

    return updatedFeatured;
}

module.exports = updateAllFeaturedStatus