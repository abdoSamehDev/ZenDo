import Task from "../models/Task.js";

export async function createTask(req, res) {
  const { title, description } = req.body;
  const userId = req.params.id;
  try {
    const newTask = await Task.create({ title, description, userId });
    res.status(200).send({ message: "Success", newTask });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function updateTask(req, res) {
  const { id, title, description, completed } = req.body;
  try {
    await Task.update({ id, title, description, completed });
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function getAllUserTasks(req, res) {
  const userId = req.params.id;
  try {
    const tasks = await Task.findAllUserTasks(userId);
    res.status(200).send({ message: "Success", tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function getTaskByTitle(req, res) {
  const { title } = req.body;
  try {
    const task = await Task.findByTitle(title);
    res.status(200).send({ message: "Success", task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params.id;
  try {
    await Task.deleteById(id);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function deleteAllUserTasks(req, res) {
  const userId = req.params.id;
  try {
    await Task.deleteAllUserTasks(userId);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
