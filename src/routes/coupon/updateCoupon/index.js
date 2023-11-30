const updateCouponCon = require('../../../api/coupon/updateCoupon/controller')

const router = require('express').Router()

router.patch('/coupon/:id', updateCouponCon)

module.exports = router
