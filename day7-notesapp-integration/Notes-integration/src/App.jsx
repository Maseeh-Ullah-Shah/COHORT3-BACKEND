import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";
const App = () => {
  const [updateId, setUpdateId] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [allNotes, setAllNotes] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //update Call
    if (updateId) {
      const updateRes = await axios.put(
        `http://localhost:3000/notes/${updateId}`,
        formValues,
      );
      setUpdateId(null);
      console.log(updateRes);
    }
    //Api call
    else {
      const res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
    }
    getAllNotes();
    setFormValues({
      title: "",
      description: "",
    });
  };
  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      console.log(res);
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("Error in get notes api", error);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  const deleteNote = async (note) => {
    try {
      let noteId = note._id;
      let res = await axios.delete(`http://localhost:3000/notes/${noteId}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("Error in Delete api", error);
    }
  };
  const updateNotes = (note) => {
    setUpdateId(note._id);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };
  return (
    <div className="h-screen p-5 bg-black text-white flex flex-col gap-2">
      <h1 className="text-3xl font-semibold text-yellow-500">
        Notes Application
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border w-1/2 p-4 rounded-lg"
      >
        <input
          onChange={(e) => handleChange(e)}
          name="title"
          value={formValues.title}
          className="rounded-lg border-2 border-white focus:border-green-500 outline-none  p-1"
          type="text"
          placeholder="Title..."
        />
        <input
          onChange={(e) => handleChange(e)}
          name="description"
          value={formValues.description}
          className="rounded-lg border-2 border-white focus:border-green-500 outline-none p-1"
          type="text"
          placeholder="Description..."
        />
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="rounded-lg bg-green-400 p-2 w-1/3 cursor-pointer"
          >
            {updateId !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>
      <div className="flex gap-2 flex-wrap">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
            updateNotes={updateNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
