import React, { useState } from 'react';
import './App.css';
import Canvas from './Canvas';
import SidePanel from './SidePanel';

function App() {

  const colors=['red','green','blue','orange','yellow']

  const tempboxes=[];
    for(let i=0;i<colors.length;i++){
      tempboxes.push({
        id:i+1,
        color: colors[i],
        margin:(i+1)*10,
        show:false
      
      })
    }
    const [boxes,setBoxes] = useState(tempboxes);
    
  const addColoredBox = (ind) => {
    

      setBoxes(boxes.map((box,index)=>{ 
        return {...box,show:index === ind ? !box.show:box.show}
      }));

      console.log(boxes)
    
  };
  return (
    <div className="App">
      <div className="root">
        <SidePanel toggle={addColoredBox} colors={colors}/>
        <Canvas  boxes={boxes}/>
      </div>
    </div>
  );
}

export default App;
