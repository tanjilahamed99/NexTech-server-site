const { ObjectId } = require("mongodb");
const Featured = require("../../../modal/Fetured");

const updateFeaturedAll = async (id, newUpdate) => {

    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            userEmail: newUpdate.userEmail,
            userPhoto: newUpdate.userPhoto,
            userName: newUpdate.userName,
            name: newUpdate.name,
            desc: newUpdate.desc,
            tags: newUpdate.tags,
            brand: newUpdate.brand,
            image: newUpdate.image,
            upload_date: newUpdate.upload_date
        }
    }

    const update = await Featured.updateOne(query, updateDoc)
    return update
}

module.exports = updateFeaturedAll