import React from 'react';
import './Canvas.css';


function Canvas({boxes}) {
  
  return (
    <div className="canvas">
       
    
      {
        boxes.map(box=>{ 
         return (box.show && <div
         // key={2}
         key={box.id}
         className="box"
         style={{
           backgroundColor: box.color,
           width: `${box.size}px`,
           height: `${box.size}px`,
           top:`${box.margin}%`,
           left:`${box.margin+20}%`
         }}
         
       />)
        }
        )
      }
      
    </div>
  );
}

export default Canvas;
