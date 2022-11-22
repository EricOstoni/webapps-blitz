import express from "express" 
import bodyParser from "body-parser"
import connect from "./db.js"
import { MongoAPIError } from "mongodb"

const app = express() 
const port = 3000 

app.use(bodyParser.json())  

app.get("/getBrand/:brand", async (req, response) => {
    let query = { brand: req.params.brand };

    collection.find(query).toArray().then(result => {
        if (!result.length == 0) return response.status(200).json(result);
        return response.json({ "status": "Failed", "message": `Brand ${req.params.brand} not found in DB`});
    }).catch(err => {
        return response.status(500).json({ "message": err });
    });
});

app.post("/saveItem", async (req,res) => {
    let db = await connect() 
    let data = req.body
    let result = await db.collection("odijeca").insertOne(data)
    if (result.insertedId) {
        res.json({"status" : "OK", "message" : `Odijeca inserted with ${result.insertedId} ` })
    } else {
        res.json({"status" : "failed"})
    }
})


app.listen(port, () => console.log(`Works on port ${port}`))