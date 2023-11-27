const Featured = require("../../modal/Fetured");


const postFeatured = async (newProducts) => {
    const cursor = await Featured.create(newProducts);
    return cursor
}

module.exports = postFeatured