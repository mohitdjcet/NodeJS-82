import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

const dbName = "myApp";

let db;

export async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected");
    db = client.db(dbName);
  } catch (err) {
    console.log("Connection Error:", err);
  }
}

export function getDB() {
  return db;
}