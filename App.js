import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notelist from "./components/Notelist";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is a note 1",
      date: "12/3/4",
      category: "",
    },
    {
      id: nanoid(),
      text: "this is a note 2",
      date: "12/3/4",
      category: "",
    },
    {
      id: nanoid(),
      text: "this is a note 3",
      date: "12/3/4",
      category: "",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      category: category,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setCategory(category);
    console.log(category);
    // setCategoryList(category)
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    //   const savedNotes = JSON.parse(localStorage.getItem("noteData"))
    // console.log(savedNotes);
    //   if (savedNotes) {
    //     setNotes(savedNotes)
    //   }
    setNotes(JSON.parse(localStorage.getItem("noteData")));
  }, []);

  useEffect(() => {
    localStorage.setItem("noteData", JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  return (
    <>
      <div className="container">
        <Navbar/>
        <div className="container grid w-fit mx-auto  p-5">
          <Search handleSearchNote={setSearchText} />
          <Notelist
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            category={category}
            handleCategory={setCategory}
            // setCategoryList={setCategoryList}
          />
        </div>
      </div>
    </>
  );
}
export default App;
