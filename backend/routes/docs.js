import express from "express";
import Document from "../models/Document.js";
import authMiddleware from "../middleware/auth.js";


const router = express.Router();

// CREATE DOCUMENT
router.post("/",authMiddleware, async (req, res) => {
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


// GET DOCUMENT BY ID
router.get("/:id", authMiddleware,async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL DOCUMENTS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const docs = await Document.find();
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
