const Featured = require("../../modal/Fetured")

const findAllFeatured = async () => {
    const cursor =await Featured.find();
    return cursor
}

module.exports = findAllFeatured