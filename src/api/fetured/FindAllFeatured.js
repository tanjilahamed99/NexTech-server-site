const Featured = require("../../modal/Fetured")

const findAllFeatured = async () => {

    const query = { featured: true }

    const cursor = await Featured.find(query).sort({ upload_date: -1 });
    return cursor
}

module.exports = findAllFeatured