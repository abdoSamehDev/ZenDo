import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import config from "./config/configuration.js";
import authConfig from "./config/passport.js";
import dotenv from "dotenv";
import initializePassport, { store } from "./config/passport.js";
import passport from "passport";
import session from "express-session";
import flash from "express-flash";
import checkAuthentication from "./utils/check_auth.js";

const app = express();
initializePassport(passport);

dotenv.config(); // Load environment variables from .env file

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// authConfig.initialize(app);
app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false,
    //db connection details
    store: store,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.get("/", checkAuthentication, (req, res) => {
  console.log("REQ USER: ", req.user);
  res.redirect("/tasks/");
});

app.get("/auth/login", (req, res) => {
  res.json({ message: "pls login or register" });
});

app.get("/failure", (req, res) => {
  res.json({ message: "FAIL" });
});

app.use(router);

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(config.port);
console.log(`Server on port ${config.port}`);
