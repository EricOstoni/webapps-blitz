
import { MongoClient, ServerApiVersion }  from 'mongodb';  
const uri = "mongodb+srv://1234:<password>@webapps.mzxtzdm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("odijeca").collection("devices");
  console.log("ok")
  client.close();
});
