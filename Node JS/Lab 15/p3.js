const { MongoClient } = require('mongodb') //import mongo db
const user = 'mongodb://localhost:27017' // mongo db url
const client = new MongoClient(user) // object of mongo db
async function dbConnect() {                        // conection function
    let result = await client.connect()         //connect of object
    let db = result.db('demo1')             // connection of database
    let col = db.collection('product')         // connection of collection
    let response1 = await col.find({}).toArray()        // store data
    console.log(response1)                  // display data
    const data = [                      // create object for add daya
        {
            name: "Handwash",                    //data 1
            price: 150,
        },
        {
            name: "carwash",             //data 2
            price: 1500
        }
    ];
    const result1 = await col.insertMany(data);         //insert data function
    console.log("Data Successfully Inserted", result1);       // display inser data
    let response = await col.find({}).toArray()         // display data array formate
    console.log(response)                                //display
    
    const result2 = await col.updateMany({ name: "carwash", "price": 1500 }, { $set: { name: "mobilecleaner", price: 2000 } }); // update data array function
    console.log("Data Updated Successfully", result2); // display data 
    const res = await col.deleteMany({});   // delete data function
    console.log("Data deleted Successfully", res); // display data 
}
dbConnect()         // call connect function

