const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:<db_password>@cluster0.dgy5mlj.mongodb.net/";

async function test() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

test();
