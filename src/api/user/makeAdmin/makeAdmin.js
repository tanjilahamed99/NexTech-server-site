const { ObjectId } = require("mongodb");
const Users = require("../../../modal/users/user");

const makeAdmin = async (id) => {

    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            isAdmin: true
        }
    }

    const getUser = await Users.updateOne(query, updateDoc)
    return getUser;
}

module.exports = makeAdmin