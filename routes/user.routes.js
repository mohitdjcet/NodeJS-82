import express from "express";
import { getUsers,postUser,updateUser,deleteUser,getUsersById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/",postUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;