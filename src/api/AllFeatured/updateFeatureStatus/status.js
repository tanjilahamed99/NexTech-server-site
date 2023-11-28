const { ObjectId } = require("mongodb");
const Featured = require("../../../modal/Fetured");
const updateAllFeaturedStat = async (id,updateStatus) => {
    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            status: updateStatus
        }
    }

    const updatedFeatured = await Featured.updateOne(query, updateDoc)

    return updatedFeatured;
}

module.exports = updateAllFeaturedStat