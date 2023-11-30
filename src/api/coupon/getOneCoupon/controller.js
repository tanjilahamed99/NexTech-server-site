const { ObjectId } = require("mongodb");
const Coupon = require("../../../modal/coupon/CreateCoupon/coupon");

const getOneCouponCon = async (req, res) => {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const result = await Coupon.findOne(query)
    res.send(result)
}
module.exports = getOneCouponCon