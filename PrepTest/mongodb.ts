// CustomerModule.ts
// Run: tsc && node dist/CustomerModule.js
// MongoDB Connection + CRUD Operations with Error Handling

import { MongoClient, ObjectId } from "mongodb";

// 🔹 MongoDB connection string (replace with your cluster)
const uri = "mongodb+srv://admin:12345@cluster0.dgy5mlj.mongodb.net/";
const client = new MongoClient(uri);

interface ICustomer {
  name: string;
  email: string;
  city: string;
}

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db("EventDB").collection("customers");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    throw err;
  }
}

// 🔹 CREATE
async function createCustomer(customer: ICustomer) {
  if (!customer.name || !customer.email) {
    console.error("⚠️ Invalid input: Name and Email are required.");
    return;
  }
  const collection = await connectDB();
  const result = await collection.insertOne(customer);
  console.log("🟢 Customer added:", result.insertedId);
}

// 🔹 READ
async function readCustomers() {
  const collection = await connectDB();
  const customers = await collection.find().toArray();
  console.log("📋 Customers List:");
  console.table(customers);
}

// 🔹 UPDATE
async function updateCustomer(id: string, updatedData: Partial<ICustomer>) {
  const collection = await connectDB();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
  console.log(result.modifiedCount ? "🟡 Customer updated!" : "⚠️ No match found.");
}

// 🔹 DELETE
async function deleteCustomer(id: string) {
  const collection = await connectDB();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  console.log(result.deletedCount ? "🔴 Customer deleted!" : "⚠️ No match found.");
}

// 🔹 MAIN EXECUTION (for demo)
async function main() {
  try {
    await createCustomer({ name: "Harinee", email: "harinee@example.com", city: "Chennai" });
    await readCustomers();
    // await updateCustomer("6543210abcdef1234567890", { city: "Bangalore" });
    // await deleteCustomer("6543210abcdef1234567890");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 DB connection closed");
  }
}

main();
