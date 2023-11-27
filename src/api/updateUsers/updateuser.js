const Users = require("../../modal/users/user");

const updateUser = async (email) => {

    const query = { email: email }
    const updateDoc = {
        $set: {
            status: true
        }
    }

    const updatedUser = await Users.updateOne(query,updateDoc)

    return updatedUser;
}

module.exports = updateUser