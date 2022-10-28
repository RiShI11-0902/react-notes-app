import React,{useState} from "react";

export default function AddNote({handleAddNote,category,handleCategory}) {
    const [noteText, setNoteText] = useState("")
    // const [category, setCategory] = useState("")
    const characterLimit = 200

    const handleChange = (event)=>{
      if (characterLimit - event.target.value.length >= 0) {
        setNoteText(event.target.value)
        // setCategory(event.target.value)
      }
      // setNoteText(event.target.value)

        // console.log();
        // addnote(noteText)
    }

    const handleCategoryChange = (event)=>{
        handleCategory(event.target.value)
    }

    const handleSaveClick =(event)=>{
      if (noteText.trim().length > 0) {
        handleAddNote(noteText)
        setNoteText("")
        handleCategory(category)
      }
    }
  return (
    <div className="Note mt-5 border-2 sm:mt-5 md:mt-0 w-[30rem] xl:mt-0 2xl:mt-0 lg:mt-0 rounded-3xl border-black p-4
    bg-gradient-to-r from-cyan-500 to-blue-100 shadow-md shadow-black">
      <textarea  className="placeholder:text-black placeholder:font-semibold focus:outline-none p-2  bg-gradient-to-r from-cyan-500 to-blue-100" onChange={handleChange} cols="50" rows="7" placeholder="Type to add Note" value={noteText}></textarea>
      <div className="note-footer flex items-center justify-between mt-4">
        <p> <span className="font-bold">{ characterLimit - noteText.length }</span> Remaining</p>
        <button className="font-extrabold" onClick={handleSaveClick}>ADD NOTE</button>
      </div>
      <div className="category space-x-4 mt-4 ">
          <label>CATEGORY:</label><input onChange={handleCategoryChange} className='w-28 focus:outline-none' type="text" />
        </div>
    </div>
  );
}
 

