const { ObjectId } = require("mongodb");
const Coupon = require("../../../modal/coupon/CreateCoupon/coupon");

const updateCouponCon = async (req, res) => {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            couponCode: req.body.couponCode,
            expiryDate: req.body.expiryDate,
            desc: req.body.desc,
            discountAmount: req.body.discountAmount
        }
    }

    const result = await Coupon.updateOne(query, updateDoc)
    res.send(result)
}
module.exports = updateCouponCon