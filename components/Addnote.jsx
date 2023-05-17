import React from 'react'
import { useState } from 'react'
function Addnote({note,setnote}) {

const[title,settitle]=useState("")
const[pera,setpera]=useState("")


const handlesubmit=(Event)=>{
 Event.preventDefault()

 const newNote = {title:title,pera:pera };
 setnote([...note, newNote]);
 console.log(newNote)

}

const ondelete=(id)=>{
  setnote((olddata)=>
  olddata.filter((currdata,index)=>{
    return index !== id;
  } 
  )
  )
}



  return (
    <>
      
        <form className='note' onSubmit={handlesubmit} note={note} setnote={setnote}>
        <input className='input' type="text" placeholder='Title' value={title} onChange={(Event)=>settitle(Event.target.value)} />
        <textarea placeholder='Write a note...' className='textarea' value={pera} onChange={(Event)=>setpera(Event.target.value)}/>
        <button className='save'>Save</button>
        </form>
     
       </>
    
  )
}

export default Addnote