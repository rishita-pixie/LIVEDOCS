import express from "express";
import Document from "../models/Document.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// CREATE DOCUMENT
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newDoc = new Document({
      title,
      content,
      owner: req.user.id
    });

    const savedDoc = await newDoc.save();
    res.status(201).json(savedDoc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL DOCUMENTS (only logged-in user)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const docs = await Document.find({ owner: req.user.id });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET DOCUMENT BY ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Document.findOne({
      _id: req.params.id,
      owner: req.user.id
    });

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE DOCUMENT
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const updated = await Document.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { title, content },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE DOCUMENT
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Document.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id
    });

    if (!deleted) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
