const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    const { title, description } = req.body;
    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Notes created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("Error in creation ", error);
  }
};
//READ ALL
const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await NotesModel.find();
    res.status(200).json({
      message: "All notes Fetched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
//READ - One
const getSingleNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let singleNotes = await NotesModel.findById(id);
    return res.status(200).json({
      message: "fetched Single notes Successfully",
      data: singleNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
//Delete
const deleteNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let newNote = await NotesModel.findByIdAndDelete(id);
    return res.status(201).json({
      message: "Notes deleted successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let singleNotes = await NotesModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json({
      message: "Update Single notes Successfully",
      data: singleNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const singleEntityUpdateController = async (req, res) => {
  try {
    let id = req.params.id;
    const body = req.body;
    let updatedNote = await NotesModel.findByIdAndUpdate(id, body, { new: true });
    return res.status(201).json({
      message: "Notes Updated Successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  deleteNotesController,
  updateNotesController,
  singleEntityUpdateController
};
