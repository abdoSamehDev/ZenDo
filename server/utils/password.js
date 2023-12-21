import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Hashed Password: ${hashedPassword}`);
  return hashedPassword;
}

export function comparePassword(plainPassword, hashedPassword) {
  const verifyPassword = bcrypt.compare(plainPassword, hashedPassword);
  console.log(`verify: ${verifyPassword}`);
  return verifyPassword;
}
