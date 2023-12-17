import pg from "pg";
import config from "./configuration.js";

// const { Pool } = pg;
const pool = new pg.Pool(config.db);

export async function query(sql, params = []) {
  try {
    const result = await pool.query(sql, params);
    return result.rows;
  } catch (e) {
    console.error("Error executing query:", e);
    throw e; // Re-throw the error for further handling
  }
}

pool.on("connect", () => console.log("DB connected"));

export default pool;
