import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

export default function Note({id,text,date,category,handleDeleteNote}) {
  return (
    <div className='Note mt-3 border-2 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) p-4 md:p-1 bg-white shadow-md shadow-slate-500 rounded-3xl w-[20rem]'>
        <p className='text-left  text-xl font-semibold'>{text}</p>
        <div className="note-footer text-xl font-semibold mt-10 flex justify-between">
            <small>{date}</small>
            <MdDeleteForever className='cursor-pointer' onClick={()=>handleDeleteNote(id)} />
        </div>
        <div className="category space-x-4 mt-4 ">
          <label>CATEGORY: <span className='font-bold'>{category}</span> </label>
        </div>
    </div>
  )
}
