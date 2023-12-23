import express from "express";
import {
  createTask,
  updateTask,
  getAllUserTasks,
  getTaskByTitle,
  deleteTask,
  deleteAllUserTasks,
} from "../controllers/tasks.controller.js";
import checkAuthentication from "../utils/check_auth.js";

const router = express.Router();

router.route("/").get(checkAuthentication, getAllUserTasks);
router.route("/create").post(checkAuthentication, createTask);
router.route("/update:id").put(checkAuthentication, updateTask);
router.route("/delete:id").delete(checkAuthentication, deleteTask);
router.route("/get:title").get(checkAuthentication, getTaskByTitle);
router.route("/delete-all").delete(checkAuthentication, deleteAllUserTasks);
// router.get("/", getAllUserTasks);
// router.post("/", createTask);
// router.put("/:id", updateTask);
// router.get("/:title", getTaskByTitle);
// router.delete("/:id", deleteTask);
// router.delete("/completed", deleteAllUserTasks);

export default router;
