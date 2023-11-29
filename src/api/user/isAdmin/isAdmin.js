const Users = require("../../../modal/users/user");


const isAdmin = async (email) => {
    const query = { email: email }
    const getUser = await Users.findOne(query)
    const admin = getUser.isAdmin
    const moderator = getUser.isModerator
    if (admin) {
        return { isAdmin: true }
    }
    if (!admin && moderator) {
        return { moderator: true }
    }
        return { isAdmin: false }
}

module.exports = isAdmin