import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Hashed Password: ${hashedPassword}`);
  return hashedPassword;
}
