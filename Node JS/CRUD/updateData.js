const dbConnect = require("./connect.js");

async function updateData() {
  const db = await dbConnect();

  const result = await db.updateMany({ name: "Parth" ,"rollNo":201}, { $set: { name: "ASDF" , rollNo:444 } });
  console.log("Data Updated Successfully",result);
}
updateData();