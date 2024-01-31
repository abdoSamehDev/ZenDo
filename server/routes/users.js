import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../controllers/users.controller.js";
import checkAuthentication from "../utils/check_auth.js";

const router = express.Router();

router.route("/create").post(createUser);
router.route("/get-by-email").get(getUserByEmail);
router.route("/update:id").put(checkAuthentication, updateUser);
router.route("/delete:id").delete(checkAuthentication, deleteUser);

export default router;
