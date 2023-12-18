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
    this.due_date = due_date || null; // Date | null
    this.priority = priority || null; // number (e.g., 1 for high, 2 for medium, 3 for low)
    this.completed = completed || false; // boolean
    this.created_at = created_at; // Date
    this.updated_at = updated_at; // Date
  }

  // Static methods for interacting with the database
  static async create({ title, description = null, userId }) {
    const result = await query(
      "INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description, userId]
    );
    return new Task(result[0]);
  }

  static async update({ id, title, description, completed }) {
    await query(
      "UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4",
      [title, description, completed, id]
    );
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
