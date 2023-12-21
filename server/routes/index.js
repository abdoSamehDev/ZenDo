import express from "express";
import tasks from "./tasks.js";
import users from "./users.js";
import auth from "./auth.js";

const router = express.Router();

router.use("/tasks", tasks);
router.use("/users", users);
router.use("/auth", auth);

export default router;
