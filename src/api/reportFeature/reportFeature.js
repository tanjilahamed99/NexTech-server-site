const { ObjectId } = require("mongodb");
const Featured = require("../../modal/Fetured");

const reportFeatureData = async (id) => {
    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            reported: true
        }
    }
    const updatedFeatured = await Featured.updateOne(query, updateDoc)

    return updatedFeatured;
}

module.exports = reportFeatureData