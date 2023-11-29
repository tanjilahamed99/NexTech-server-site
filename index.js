const http = require('http')
const app = require('./src/app');
const connectDB = require('./src/db/cannectDB/cannectDB');
const server = http.createServer(app)
require("dotenv").config();
const port = process.env.PORT || 5000

const main = async () => {
    await connectDB()
    server.listen(port, () => {
        console.log(`server is on in port ${port}`)
    })
}

main()