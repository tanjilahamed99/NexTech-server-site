const Users = require("../../../modal/users/user")

const userRole = async (email) => {
    const query = { email: email }
    const getUser = await Users.findOne(query)
    const admin = getUser?.isAdmin
    const moderator = getUser?.isModerator
    if (admin) {
        return { admin: true }
    }
    if (moderator) {
        return { moderator: true }
    }
    return { admin: false }
}

module.exports = userRole