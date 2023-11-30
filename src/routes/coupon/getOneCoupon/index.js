const getOneCouponCon = require('../../../api/coupon/getOneCoupon/controller')

const router = require('express').Router()

router.get('/coupon/:id', getOneCouponCon)

module.exports = router
