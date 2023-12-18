import express from "express";
import {
  createTask,
  updateTask,
  getAllUserTasks,
  getTaskByTitle,
  deleteTask,
  deleteAllUserTasks,
} from "../controllers/tasks.controller.js";

const router = express.Router();

router.route("/").get(getAllUserTasks);
router.route("/create").post(createTask);
router.route("/update:id").put(updateTask);
router.route("/delete:id").delete(deleteTask);
router.route("/get:title").get(getTaskByTitle);
router.route("/delete-all").delete(deleteAllUserTasks);
// router.get("/", getAllUserTasks);
// router.post("/", createTask);
// router.put("/:id", updateTask);
// router.get("/:title", getTaskByTitle);
// router.delete("/:id", deleteTask);
// router.delete("/completed", deleteAllUserTasks);

export default router;
