const Users = require("../../../modal/users/user");

const getAllUsers = async () => {
    const getUser = await Users.find()
    return getUser;
}

module.exports = getAllUsers