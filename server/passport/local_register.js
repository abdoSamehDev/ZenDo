import LocalStrategy from "passport-local";
import User from "../models/User.js";

const localRegister = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    const firstName = req.body.firstName || email.split("@")[0];
    const lastName = req.body.lastName || null;
    if (!email || !password) {
      return done(null, false, { message: "Invalid credentials" });
    }
    try {
      //Chech for existing user
      const existingUser = await User.getUserByEmail(email);

      if (existingUser) {
        console.log("Email already taken.");
        return done(null, false, { message: "Email already taken." });
      }

      const newUser = await User.create({
        email,
        password,
        firstName,
        lastName,
      });

      return done(null, newUser);
    } catch (error) {
      console.log("ERROR REGISTER: " + error.message);
      return done(error);
    }
  }
);

export default localRegister;
