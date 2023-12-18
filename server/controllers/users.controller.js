import User from "../models/User.js";
import { hashPassword } from "../utils/password.js";

export async function createUser(req, res) {
  const { email, password, firstName, lastName, googleId } = req.body;
  try {
    const newUser = await User.create({
      email,
      password,
      firstName,
      lastName,
      googleId,
    });
    res.status(200).send({ message: "Success", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function getUserData(req, res) {
  const userId = req.params.id;
  try {
    const userData = await User.getUserData({
      userId,
    });
    res.status(200).send({ message: "Success", userData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function updateUser(req, res) {
  const { id, email, password, completed } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    await User.update({ id, email, hashedPassword, completed });
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.body;
  try {
    await User.deleteUser(id);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
