const express = require('express');
const useMiddleWere = require('./middleWers/useMiddleWere');
const connectDB = require('./db/cannectDB/cannectDB');
const app = express()
const mongoose =require('mongoose')
const port = process.env.PORT || 5000
require("dotenv").config();
const featured = require('./routes/featured')

useMiddleWere(app)
app.use(featured)


app.get('/health', (req, res) => {
    res.send('welcome to my nexTech server ')
})

app.all('*', (req, res, next) => {
    const error = new Error(`${req.url} is not a valid url`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`app start on  port ${port}`)
    })
}

main()