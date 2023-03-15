import './SidePanel.css';
import Button from './Button';

function SidePanel({toggle}) {

  const addBox = (color) => {
    // box.color='blue';
    toggle(color);
    // Code to add a box to the canvas
  };


  return (
    <div className="side-panel">
      <Button add={()=>addBox("red")} label="Red Box" />
      <Button add={()=>addBox("blue")} label="Blue Box" />
      <Button add={()=>addBox("green")} label="Green Box" />
      <Button add={()=>addBox("orange")} label="Orange Box" />
      <Button add={()=>addBox("brown")} label="Brown Box" />


    </div>
  );
}

export default SidePanel;
