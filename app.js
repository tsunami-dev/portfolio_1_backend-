// Dependencies
const express = require("express");
const gamesController = require("./controllers/gamesController");

// Configuration
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/games", gamesController);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to your Chess Gaming Database ");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
// Export
module.exports = app;