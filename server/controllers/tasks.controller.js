import Task from "../models/Task.js";

export async function createTask(req, res) {
  const { title, description, dueDate, priority, userId } = req.body;
  // const userId = req.user.id;
  try {
    const newTask = await Task.create({
      title,
      description,
      dueDate,
      priority,
      userId,
    });
    res.status(200).send({ message: "Success", newTask });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function updateTask(req, res) {
  const { title, description, completed, dueDate, priority } = req.body;
  const id = req.params.id;
  try {
    await Task.update({ id, title, description, dueDate, completed, priority });
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function completeTask(req, res) {
  const completed = req.body.completed;
  const id = req.params.id;
  try {
    await Task.toggleCompleted({ id, completed });
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function getAllUserTasks(req, res) {
  const userId = req.query.userId;
  // const userId = 1;
  try {
    const tasks = await Task.findAllUserTasks(userId);
    res.status(200).send({ message: "Success", tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function getTaskByTitle(req, res) {
  const title = req.body;
  try {
    const task = await Task.findByTitle(title);
    res.status(200).send({ message: "Success", task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  try {
    await Task.deleteById(id);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function deleteAllUserTasks(req, res) {
  const userId = req.body.userId;
  try {
    await Task.deleteAllUserTasks(userId);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
