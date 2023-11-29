require("dotenv").config();
const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).send({ message: 'unauthorized' })
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized' })
        }
        req.decoded = decoded
        return next()
    })
}

module.exports = verifyToken