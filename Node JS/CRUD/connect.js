const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect(){
    const connection = await client.connect();
    const db = connection.db("demo1");
    return db.collection("students");
}

module.exports = dbConnect;
