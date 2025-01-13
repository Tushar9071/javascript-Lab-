const dbConnect = require("./connect.js")

async function readData(){
    const db = await dbConnect();

    await db.find({}).toArray().then((data)=>{
        console.log(data);
    })
    console.log("Data Found");

}
readData()