const Featured = require("../../../modal/Fetured");

const AllFeaturedData = async () => {

    const updatedTrending = await Featured.find().sort({ status: -1 })
    return updatedTrending;
}

module.exports = AllFeaturedData