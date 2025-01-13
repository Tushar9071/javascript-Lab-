const dbConnect = require("./connect.js");

async function insertData() {
  const db = await dbConnect();

  const data = [
    {
      name: "Bhautik",
      rollNo: 201,
    },
    {
        name:"Kishan",
        rollNo:555
    }
  ];

  const result = await db.insertMany(data);
  console.log("Data Successfully Inserted", result);
}
insertData();
