const deleteCoupon = require('../../../api/coupon/deleteCoupon/controller')

const router = require('express').Router()

router.delete('/deleteCoupon/:id', deleteCoupon)

module.exports = router
