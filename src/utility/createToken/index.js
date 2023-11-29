const jwt = require('jsonwebtoken')
const token = jwt.sign({ ami: tanjil }, process.env.TOKEN_SECRET, { expiresIn: '2h' })
module.exports = token