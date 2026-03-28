// import * as userService from "../services/user.service.js";
import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

//Create Data(Insert)
export async function postUser(req, res) {
  try {
    const db = getDB();
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Read Data from MongoDB
export async function getUsers(req, res) {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Updated Data
export async function updateUser(req, res) {
  try {
    const db = getDB();
    const id = req.params.id;
    const updatedData = req.body;

    const result = await db.collection("users").updateOne(
      {_id: new ObjectId(id)},
      {$set:updatedData}
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Delete User
export async function deleteUser(req, res) {
  try {
    const db = getDB();
    const id = req.params.id;

    const result = await db.collection("users").deleteOne({
      _id: new ObjectId(id)
    })
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUsersById(req, res) {
  try {
    const db = getDB();
    const id = req.params.id;

    const user = await db.collection("users").findOne({
      _id: new ObjectId(id)
    })
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}