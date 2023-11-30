const { ObjectId } = require("mongodb");
const Coupon = require("../../../modal/coupon/CreateCoupon/coupon");

const deleteCoupon = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const query = { _id: new ObjectId(id) }
    const result = await Coupon.deleteOne(query)
    res.send(result)
}
module.exports = deleteCoupon