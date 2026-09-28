const NotesModel = require("../models/notes.model")

const createNotesController = async (req,res)=>{
    try {
        let {title,description} = req.body;
        let newNote = await NotesModel.create({
            title,description
        });
        return res.status(201).json({
            message:"Notes Created Successfully....",
            data:newNote
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}
module.exports = {createNotesController}