import React, {useState} from 'react';
import './Canvas.css';


function Canvas({show, boxColour}) {
  const[showMessage, currentMessage]=useState(false);
  
  const doubleClickHandler = (event) => {
		if(event.detail === 2){
			console.log("Double Clicked");
      currentMessage(!showMessage);
		}
	}

  

    const box = {
            id: 1,
            color: 'red',
            size: 'getRandomSize()',
          };
          
          

  return (
    <div className="canvas">
       
      {showMessage && <p className='message'>coloue of the box is "{boxColour}"</p>}
      {show && <div onClick={doubleClickHandler}
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
