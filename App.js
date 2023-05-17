import logo from './logo.svg';
import './App.css';
import './components/style.css'
import Addnote from './components/Addnote';
import Notes from './components/Notes';
import { useState } from 'react';
import { Note } from '@mui/icons-material';

function App() {


const[note,setnote]=useState([])

const ondelete=(id)=>{
  setnote((olddata)=>
  olddata.filter((currdata,index)=>{
    return index !== id;
  } 
  )
  )
}


  return (
    <div className="App">
      <div className='header'> 
            <h1 className='title'>Notes app</h1>
      </div>
     <div className='flexproperty'>
    {
      note.map((val,index)=>{
        return<Notes
        key={index}
        id={index}
        title={val.title}
        pera={val.pera}
        deleteitem={ondelete}
        />
      })
    }
    <Addnote note={note} setnote={setnote}/>
      </div>
      
     
      </div>
    
  );
}

export default App;
