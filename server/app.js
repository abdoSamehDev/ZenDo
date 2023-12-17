import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import config from "./configuration.js";
import dotenv from "dotenv";

const app = express();

dotenv.config(); // Load environment variables from .env file

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
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
