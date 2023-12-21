import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../controllers/users.controller.js";

const router = express.Router();

router.route("/create").post(createUser);
router.route("/get-by-email").get(getUserByEmail);
router.route("/update:id").put(updateUser);
router.route("/delete:id").get(deleteUser);

export default router;
