import apiClient from "../axiosClient.js";

export async function getTasks(userId) {
  try {
    // const id = { userId: userId };
    const response = await apiClient.get(`/tasks?userId=${userId}`);
    return response.data;
  } catch (e) {
    console.error("Error getting user tasks: ", e);
    throw e;
  }
}

export async function createTask(task) {
  try {
    const response = await apiClient.post("/tasks/create/", task);
    return response.data;
  } catch (e) {
    console.error("Error creating task: ", e);
    throw e;
  }
}

export async function updateTask(taskId, task) {
  try {
    const response = await apiClient.put(`/tasks/update/${taskId}`, task);
    return response.data;
  } catch (e) {
    console.error("Error update task: ", e);
    throw e;
  }
}

export async function toggleComplete(taskId, completed) {
  try {
    const response = await apiClient.put(`/tasks/complete/${taskId}`, {
      completed: completed,
    });
    return response.data;
  } catch (e) {
    console.error("Error update task: ", e);
    throw e;
  }
}

export async function deleteTask(taskId) {
  try {
    const response = await apiClient.delete(`/tasks/delete/${taskId}/`);
    return response.data;
  } catch (e) {
    console.error("Error update task: ", e);
    throw e;
  }
}
