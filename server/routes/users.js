import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.route("/create").post(createUser);
router.route("/update:id").put(updateUser);
router.route("/delete:id").get(deleteUser);

export default router;
