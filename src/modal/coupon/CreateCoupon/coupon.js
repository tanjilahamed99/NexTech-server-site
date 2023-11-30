const { model, Schema } = require("mongoose");
const CouponSchema = new Schema({
    couponCode: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    discountAmount: {
        type: Number,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
})


const Coupon = model("Coupon", CouponSchema, "coupon")

module.exports = Coupon