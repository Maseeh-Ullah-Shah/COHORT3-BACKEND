import React from "react";

const NoteCard = ({ note,deleteNote,updateNotes }) => {
  return (
    <div className="w-[30%] p-4 border border-white rounded-xl flex flex-col gap-4">
      <h1>{note.title}</h1>
      <p className="text-xs">{note.description.length > 20 ? note.description.substring(0,60):note.description}</p>
      <div className="flex justify-between ">
        <button 
        onClick={()=>{updateNotes(note)}}
        className="p-2 cursor-pointer rounded-xl bg-yellow-500 text-white">
          Update
        </button>
        <button
        onClick={()=>deleteNote(note)}
        className="p-2 cursor-pointer rounded-xl bg-red-500 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
