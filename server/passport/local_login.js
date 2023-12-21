import LocalStrategy from "passport-local";
import { comparePassword } from "../utils/password.js";
import User from "../models/User.js";

// Configure Passport to use local strategy

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    // Validate email and password
    console.log("HI! Email and password");
    console.log(email);
    if (!email || !password) {
      console.log("Invalid credentials");
      return done(null, false, { message: "Invalid credentials" });
    }
    // try {
    console.log("trying to get user by email");
    const user = await User.getUserByEmail(email);
    console.log("USER: ", user);

    if (!user) {
      console.log("Incorrect email.");
      return done(null, false, { message: "Incorrect email." });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    console.log(isPasswordValid);

    if (!isPasswordValid) {
      console.log("Incorrect PW.");
      return done(null, false, { message: "Incorrect password." });
    }

    console.log("LOGGED IN");
    console.log(user);
    return done(null, user);
    // } catch (error) {
    //   console.log("ERROR LOGIN: " + error.message);
    //   return done(error);
    // }
  }
);

export default localLogin;
