import express from "express";
import { createUser, delUserByID, getUserByID, getUsers, updateUserByID } from "../controllers/users.js";

const router=express.Router();

router.get('/', getUsers)

router.post('/', createUser)

router.get("/:id", getUserByID)

router.delete('/:id', delUserByID)

router.patch('/:id', updateUserByID)

export default router;
