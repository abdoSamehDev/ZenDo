import express from "express";
import {
  localLogin,
  localRegister,
  googleAuth,
  logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/login").post(localLogin);
router.route("/register").post(localRegister);
router.route("/google").get(googleAuth);
router.route("/logout").get(logout);

export default router;
