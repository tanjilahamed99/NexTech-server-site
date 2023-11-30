const Users = require("../../modal/users/user");
const createUsers = async (user) => {
    const query = { email: user.email }
    const isExist = await Users.findOne(query)
    if (!isExist) {
        const createUser = await Users.create(user)
        return createUser;
    }
    return { exist: true }

}

module.exports = createUsers