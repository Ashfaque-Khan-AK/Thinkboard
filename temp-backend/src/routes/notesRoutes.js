import express from "express";
import { createNote, updateNote, getNoteById, deleteNote, getAllNotes } from "../controllers/noteControllers.js";

const router = express.Router();



router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.post("/", createNote);
router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;


