const { ObjectId } = require("mongodb");
const Users = require("../../../modal/users/user");

const makeModerator = async (id) => {

    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            isModerator: true
        }
    }

    const getUser = await Users.updateOne(query, updateDoc)
    return getUser;
}

module.exports = makeModerator