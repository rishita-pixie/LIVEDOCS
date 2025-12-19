const express = require("express");
const router = express.Router();

// Temporary in-memory docs
const documents = {};

// CREATE DOCUMENT
router.post("/", (req, res) => {
  const id = Date.now().toString();
  documents[id] = { content: "" };

  res.status(201).json({ id });
});

// GET DOCUMENT
router.get("/:id", (req, res) => {
  const doc = documents[req.params.id];
  if (!doc) {
    return res.status(404).json({ message: "Document not found" });
  }

  res.json(doc);
});

module.exports = router;
