const Coupon = require("../../../modal/coupon/CreateCoupon/coupon");

const getAllCouponCon = async (req, res) => {
    
    const result = await Coupon.find()
    res.send(result)
}
module.exports = getAllCouponCon