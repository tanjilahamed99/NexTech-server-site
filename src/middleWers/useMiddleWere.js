const express = require('express')
const cors = require('cors')

const useMiddleWere = (app) => {
    app.use(express.json())
    app.use(cors())
}

module.exports = useMiddleWere