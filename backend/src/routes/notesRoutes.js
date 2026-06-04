import Express from "Express"
import { createNote, getNoteById,deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = Express.Router();

router.get("/",getAllNotes);
router.get("/:id", getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;

