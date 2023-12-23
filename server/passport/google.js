import User from "../models/User.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleLogin = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/tasks",
    // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  },
  async function (accessToken, refreshToken, profile, cb) {
    console.log("Google Authentication Callback:", profile);
    console.log("Google Authentication Callback:", profile.email);
    console.log("Google Authentication Access Token:", accessToken);
    console.log("Google Authentication refreshToken:", refreshToken);

    try {
      const user = await User.getUserByGoogleId(profile.id);

      if (user) {
        console.log("User Exists:", user);
        return cb(null, user);
      } else {
        const result = await db.query(
          "INSERT INTO users (google_id) VALUES ($1) RETURNING *",
          [profile.id]
        );
        const user = result.rows[0];
        console.log("New User Created:", user);
        return cb(null, user);
      }
    } catch (error) {
      console.error("Error during Google Authentication:", error);
      return cb(error);
    }
  }
);

export default googleLogin;
