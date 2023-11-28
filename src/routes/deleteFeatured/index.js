const deleteFeaturedCon = require('../../api/deleteFeatured/controller')
const router = require('express').Router()

router.delete('/featured/:id',deleteFeaturedCon)

module.exports = router