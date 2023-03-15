import React, { useState } from 'react';
import './App.css';
import Canvas from './Canvas';
import SidePanel from './SidePanel';

function App() {
  const [show, setShow] = useState(false);
  const [boxColour, setColor]= useState("");
  const addColoredBox = (color) => {
    
    setColor(color);
    setShow(!show);
    
  };
 

  return (
    <div className="App">
      <div className="root">
        <SidePanel toggle={addColoredBox}/>
        <Canvas show={show} boxColour={boxColour}/>
      </div>
    </div>
  );
}

export default App;
