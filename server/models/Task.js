import { query } from "../db.js";

class Task {
  constructor({
    id,
    user_id,
    title,
    description,
    due_date,
    priority,
    completed,
    created_at,
    updated_at,
  }) {
    this.id = id; // number (assuming primary key)
    this.user_id = user_id; // number (foreign key referencing users table)
    this.title = title; // string
    this.description = description || ""; // string | null
    this.due_date = due_date || ""; // Date | null
    this.priority = priority || null; // number (e.g., 1 for high, 2 for medium, 3 for low)
    this.completed = completed || false; // boolean
    this.created_at = created_at; // Date
    this.updated_at = updated_at; // Date
  }

  // Static methods for interacting with the database
  static async create({
    title,
    description = null,
    dueDate,
    priority = 3,
    userId,
  }) {
    const result = await query(
      "INSERT INTO tasks (title, description, due_date, priority, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, dueDate, priority, userId]
    );
    return new Task(result[0]);
  }

  static async update({
    id,
    title,
    description,
    dueDate,
    completed = false,
    priority,
  }) {
    await query(
      "UPDATE tasks SET title = $1, description = $2, due_date = $3, completed = $4, priority = $5 WHERE id = $6",
      [title, description, dueDate, completed, priority, id]
    );
  }

  static async toggleCompleted({ id, completed = false }) {
    await query("UPDATE tasks SET completed = $1 WHERE id = $2", [
      !completed,
      id,
    ]);
  }

  static async findAllUserTasks(userId) {
    const results = await query(
      "SELECT tasks.id, user_id, title, description, due_date, priority, completed, created_at, updated_at FROM tasks JOIN users ON user_id = users.id WHERE user_id = $1",
      [userId]
    );
    return results.map((row) => new Task(row));
  }

  static async findByTitle(title) {
    const results = await query(
      "SELECT * FROM tasks WHERE LOWER(title) LIKE $1",
      [`%${title.toLowerCase()}%`]
    );
    return results.map((row) => new Task(row));
  }

  static async deleteById(id) {
    await query("DELETE FROM tasks WHERE id = $1", [id]);
  }

  static async deleteAllUserTasks(userId) {
    await query("DELETE FROM tasks WHERE user_id = $1", [userId]);
  }
}

export default Task;
