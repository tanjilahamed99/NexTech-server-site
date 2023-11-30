const getAllCouponCon = require('../../../api/coupon/getAllCoupon/controller')

const router = require('express').Router()

router.get('/allCoupon', getAllCouponCon)

module.exports = router
