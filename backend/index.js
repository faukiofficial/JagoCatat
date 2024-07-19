require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const express = require("express");
const cors = require("cors");
const app = express();

const { authenticateToken } = require("./utilities");
const controller = require("./controller");

app.use(express.json());

// Middleware logging untuk debugging
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Middleware CORS
app.use(
  cors({
    origin: ["https://jagocatat.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Tambahkan middleware OPTIONS
app.options("*", cors());

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

app.post("/create-account", controller.createAccount);
app.post("/login", controller.login);
app.get("/get-user", authenticateToken, controller.getUser);
app.post("/add-note", authenticateToken, controller.addNote);
app.put("/edit-note/:noteId", authenticateToken, controller.editNote);
app.get("/get-all-notes", authenticateToken, controller.getAllNotes);
app.delete("/delete-note/:noteId", authenticateToken, controller.deleteNote);
app.put("/update-note-pinned/:noteId", authenticateToken, controller.updateNotePinned);
app.get("/search-notes/", authenticateToken, controller.searchNotes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

module.exports = app;
