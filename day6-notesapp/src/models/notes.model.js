const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20,"Minimum 20 characters are required"]
  },
});
const NotesModel = mongoose.model("notes", notesSchema);
module.exports = NotesModel;