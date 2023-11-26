const Featured = require("../../modal/Fetured");

const findTotalTrending = async () => {
    const featuredItem = await Featured.estimatedDocumentCount();
    return featuredItem;
}


module.exports = findTotalTrending