import { MongoClient, ServerApiVersion }  from 'mongodb';  

const uri = "mongodb+srv://1234:1234@webapps.mzxtzdm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



let db = null 
export default () => { return new Promise((resolve, reject)=> {
    if (db && client.isConnected()) {
        resolve(db) 
    }
    else {
        client.connect(err => {
            if (err) {
                reject("Failed" + err) ; 
            }
            else {
                console.log("Database connected successfully!");
                db = client.db("odijeca")
                resolve(db)
            }
        });
    }
}); 
}