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

router.route("/").get(getAllUserTasks).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask);
router.route("/:title").get(getTaskByTitle);
router.route("/completed").delete(deleteAllUserTasks);
// router.get("/", getAllUserTasks);
// router.post("/", createTask);
// router.put("/:id", updateTask);
// router.get("/:title", getTaskByTitle);
// router.delete("/:id", deleteTask);
// router.delete("/completed", deleteAllUserTasks);

export default router;
