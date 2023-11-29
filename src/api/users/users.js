const Users = require("../../modal/users/user");
const createUsers = async (user) => {

    const query = { email: user.email }
    const isExist = Users.find(query)
    if (isExist) {
        return { exist: true }
    }
    const createUser = await Users.create(user)
    return createUser;
}

module.exports = createUsers