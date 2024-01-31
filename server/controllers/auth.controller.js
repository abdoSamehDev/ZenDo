import passport from "passport";
import User from "../models/User.js";
import { comparePassword } from "../utils/password.js";

// export const localLogin = passport.authenticate("local-login", {
//   // successMessage: "Success",
//   failureMessage: "Failed",
//   successRedirect: "/success-login",
//   // failureRedirect: "/landing",
//   // failureFlash: true,
// });

export async function localLogin(req, res) {
  // const userId = req.user.id;
  // const userId = 1;
  const { email, password } = req.body;
  try {
    // Validate email and password
    // console.log("HI! Email and password");
    // console.log(email);
    if (!email || !password) {
      console.log("Invalid credentials");
      res.status(401).send({ message: "Invalid credentials" });
      return null;
    }
    // try {
    // console.log("trying to get user by email");
    const user = await User.getUserByEmail(email);
    console.log("USER: ", user);

    if (!user) {
      console.log("Incorrect email.");
      res.status(401).send({ message: "Invalid credentials" });
      return null;
    }

    const isPasswordValid = await comparePassword(password, user.password);

    // console.log(isPasswordValid);

    if (!isPasswordValid) {
      console.log("Incorrect PW.");
      res.status(401).send({ message: "Invalid credentials" });
      return null;
    }

    console.log("LOGGED IN");
    console.log(user);
    const userData = {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      googleId: user.google_id,
    };
    res.status(200).send({ message: "Success", userData });
    // } catch (error) {
    //   console.log("ERROR LOGIN: " + error.message);
    //   return done(error);
    // }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

// export const localRegister = passport.authenticate("local-register", {
//   successRedirect: "/",
//   failureRedirect: "/register",
//   failureFlash: true,
// });

export async function localRegister(req, res) {
  const { email, password, lastName } = req.body;
  const firstName = req.body.firstName || email.split("@")[0];
  //  const lastName = req.body.lastName || null;
  // if (!email || !password) {
  //     console.log("Invalid credentials");
  //     res.status(401).send({ message: "Invalid credentials" });
  //     return null;
  //    return done(null, false, { message: "Invalid credentials" });
  //  }
  try {
    //Chech for existing user
    const existingUser = await User.getUserByEmail(email);

    if (existingUser) {
      console.log("Email already taken.");
      res.status(409).send({ message: "Email already taken." });
      return null;
    }

    const newUser = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    const userData = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
      googleId: newUser.google_id,
    };

    res.status(200).send({ message: "Success", userData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}

export const googleAuth = passport.authenticate("google", {
  scope: ["profile"],
});

export function logout(req, res) {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect("/");
  });
}
