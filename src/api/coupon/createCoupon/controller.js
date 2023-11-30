const Coupon = require("../../../modal/coupon/CreateCoupon/coupon");

const createCouponCon = async (req, res) => {
    const newCoupon = req.body
    const result = await Coupon.create(newCoupon)
    res.send(result)
};
module.exports = createCouponCon