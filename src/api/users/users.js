const Users = require("../../modal/users/user");
const createUsers = async (user) => {

    const createUser = await Users.create(user)

    return createUser;
}

module.exports = createUsers