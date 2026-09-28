const express = require("express");
const {createNotesController,getAllNotesController,getSingleNotesController,deleteNotesController,updateSingleNotesController} = require("../controllers/notes.controller");

const router = express.Router();
//CREATE
router.post("/create",createNotesController);
//READ
router.get("/allNotes",getAllNotesController);
//READ ONE
router.get("/:id",getSingleNotesController)
//DELETE
router.delete("/delete/:id",deleteNotesController)
//Update
router.put("/update/:id",updateSingleNotesController)
module.exports = router;