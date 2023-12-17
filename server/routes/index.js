import express from "express";
import tasks from "./tasks.js";

const router = express.Router();

router.use("/tasks", tasks);
// router.use("/users", usersRouter);

export default router;
