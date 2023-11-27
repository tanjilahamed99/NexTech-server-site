const { model, Schema } = require("mongoose");
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type:Boolean
    },
    isModerator: {
        type:Boolean
    },
    isAdmin: {
        type:Boolean
    }
})


const Users = model("Users", UsersSchema, "users")

module.exports = Users