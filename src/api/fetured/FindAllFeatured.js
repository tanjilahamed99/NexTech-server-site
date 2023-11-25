const Featured = require("../../modal/Fetured")

const findAllFeatured = async () => {
    const cursor =await Featured.find().sort({ upload_date: -1 });
    return cursor
}

module.exports = findAllFeatured