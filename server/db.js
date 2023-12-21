import pg from "pg";
import config from "./config/configuration.js";

// const { Pool } = pg;
const pool = new pg.Pool(config.db);

export async function query(sql, params = []) {
  try {
    console.log("INSIDE QUERE SQL: ", sql);
    console.log("INSIDE QUERE PARAMS: ", params);
    const result = await pool.query(sql, params);
    console.log("INSIDE QUERY: ", result.rows);
    return result.rows;
  } catch (e) {
    console.error("Error executing query:", e);
    throw e; // Re-throw the error for further handling
  }
}

pool.on("connect", () => console.log("DB connected"));

export default pool;
