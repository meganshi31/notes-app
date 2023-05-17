import React from "react";



function Notes(props) {

  const deletenote=()=>{
    props.deleteitem(props.id);
  }

  return (
    
      <div className="grid-container">
        <div className="grid-item">
            <h1 className="not-title">{props.title}</h1>
            <p className="pera" type="peragraph">{props.pera}</p>
           <button className="delete" onClick={deletenote}>
            Delete
           </button>
           </div>


        </div>


      
  
  );
}

export default Notes;
