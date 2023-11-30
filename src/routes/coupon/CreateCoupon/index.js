const createCouponCon = require('../../../api/coupon/createCoupon/controller')


const router = require('express').Router()

router.post('/createCoupon', createCouponCon)

module.exports = router
