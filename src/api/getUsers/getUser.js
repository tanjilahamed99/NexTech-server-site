const Users = require("../../modal/users/user");


const findAllUsers = async (email) => {
    const query = { email: email }
    const cursor = await Users.find(query);
    return cursor
}

module.exports = findAllUsers