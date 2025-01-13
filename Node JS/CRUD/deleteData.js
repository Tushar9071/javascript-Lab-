const dbConnect = require("./connect.js")

async function deleteData(){
    const db = await dbConnect();

    const res = await db.deleteMany({});
    console.log("Data Deleted Successfully",res);

}
deleteData();