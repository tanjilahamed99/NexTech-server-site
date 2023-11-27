const { ObjectId } = require("mongodb")
const Trending = require("../../modal/trending");

const reportTrendingData = async (id) => {
    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            reported: true
        }
    }
    const updatedTrending = await Trending.updateOne(query, updateDoc)

    return updatedTrending;
}

module.exports = reportTrendingData