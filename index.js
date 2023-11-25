const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8mn4lkn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const featuredCollection = client.db("nexTech").collection("featured");

        // featured related apis
        app.get('/featured', async (req, res) => {
            const sortDate = { upload_date: 'desc' }
            const result = await featuredCollection.find().sort(sortDate).toArray()
            res.send(result)
        })


        app.patch('/featured/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const find = await featuredCollection.findOne(query)
            const newVote = find.upvote + 1
            const updateDoc = {
                $set: {
                    upvote: newVote
                }
            }
            const result = await featuredCollection.updateOne(query,updateDoc)
            res.send(result)
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('welcome to my nexTech server ')
})

app.listen(port, () => {
    console.log(`app start on  port ${port}`)
})