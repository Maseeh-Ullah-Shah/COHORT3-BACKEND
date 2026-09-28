const express = require("express");
const {singleEntityUpdateController,createNotesController,getAllNotesController,getSingleNotesController,deleteNotesController,updateNotesController} = require("../controllers/notes.controller");

const router = express.Router();
//CREATE
router.post("/create",createNotesController);
//READ
router.get("/allNotes",getAllNotesController);
//READ - ONE
router.get("/:id",getSingleNotesController)
//DELETE
router.delete("/:id",deleteNotesController)
//Update VIA PUT
router.put("/:id",updateNotesController)
//Update VIA PATCH
router.patch("/:id/single",singleEntityUpdateController)
module.exports = router;