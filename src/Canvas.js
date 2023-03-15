import React, {useState} from 'react';
import './Canvas.css';


function Canvas({show, boxColour}) {
    const box = {
            id: 1,
            color: 'red',
            size: 'getRandomSize()',
          };
          
          

  return (
    <div className="canvas">
       
     
      {show && <div
            // key={2}
            className="box"
            style={{
              backgroundColor: boxColour,
              width: `${box.size}px`,
              height: `${box.size}px`,
            }}
            
          />
          }
      
    </div>
  );
}

export default Canvas;
