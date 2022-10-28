import React from "react";
// import Note from "./Note";
import AddNote from "./AddNote";
import Note from "./Note";

function Notelist({ notes, handleAddNote, handleDeleteNote,category, handleCategory,setCategoryList }) {
  return (
    //grid-cols-[(200px,1fr)]
    <>
    <AddNote setCategoryList={setCategoryList} handleCategory={handleCategory} category={category} handleAddNote={handleAddNote} />
      <div className="grid w-fit mx-auto mt-20 2xl:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-3 ">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                category={note.category}
              />
            </div>
          );
        })}

        
      </div>
    </>
  );
}

export default Notelist;
