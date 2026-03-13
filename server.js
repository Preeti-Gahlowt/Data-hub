const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// GET all posts
app.get("/posts", (req, res) => {
  res.json({ message: "GET /posts route working" });
});

// GET single post
app.get("/posts/:id", (req, res) => {
  res.json({ message: "GET /posts/:id route working", id: req.params.id });
});

// CREATE post
app.post("/posts", (req, res) => {
  res.json({ message: "POST /posts route working" });
});

// UPDATE post
app.put("/posts/:id", (req, res) => {
  res.json({ message: "PUT /posts/:id route working", id: req.params.id });
});

// DELETE post
app.delete("/posts/:id", (req, res) => {
  res.json({ message: "DELETE /posts/:id route working", id: req.params.id });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});