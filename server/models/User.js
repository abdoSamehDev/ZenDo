import { query } from "../db.js";
import { hashPassword } from "../utils/password.js";

class User {
  constructor({ id, email, password, first_name, last_name, google_id }) {
    this.id = id; // number (assuming primary key)
    this.email = email; // string
    this.password = password; // string
    this.first_name = first_name; // string
    this.last_name = last_name || null; // string
    this.google_id = google_id || null; // boolean
  }

  // Static methods for interacting with the database
  static async create({
    email,
    password,
    firstName,
    lastName = null,
    googleId = null,
  }) {
    //   let id = googleId || null;
    const hashedPassword = await hashPassword(password);
    const result = await query(
      "INSERT INTO users (email, password, first_name, last_name, google_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [email, hashedPassword, firstName, lastName, googleId]
    );
    return new User(result[0]);
  }

  static async getUserById(id) {
    //   let id = googleId || null;
    console.log("Get user by id func input: ", id);
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);
    console.log("Get user by id func returning: ", result[0]);
    return new User(result[0]);
  }

  static async getUserByEmail(email) {
    //   let id = googleId || null;
    if (email) {
      try {
        console.log(email);
        const result = await query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        console.log("RESULTS: ", result);
        return new User(result[0]);
      } catch (e) {
        console.log("Getting user by email ERROR: " + e.message);
        return null;
      }
    }
  }

  static async getUserByGoogleId(googleIId) {
    //   let id = googleId || null;
    if (googleIId) {
      try {
        console.log(googleIId);
        const result = await query("SELECT * FROM users WHERE google_id = $1", [
          googleIId,
        ]);
        console.log("RESULTS: ", result);
        return new User(result[0]);
      } catch (e) {
        console.log("Getting user by email ERROR: " + e.message);
        return null;
      }
    }
  }

  static async update({ id, email, password, firstName, lastName, googleId }) {
    await query(
      "UPDATE users SET email = $1, password = $2, first_name = $3, last_name = $4, google_id=$5 WHERE id = $6",
      [email, password, firstName, lastName, googleId, id]
    );
  }

  static async deleteUser(id) {
    await query("DELETE FROM users WHERE id = $1", [id]);
  }
}

export default User;
