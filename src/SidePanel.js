import './SidePanel.css';
import Button from './Button';

function SidePanel({toggle,colors}) {

  const addBox = (index) => {
    // box.color='blue';
    toggle(index);
    // Code to add a box to the canvas
  };
    return (
    <div className="side-panel">
      {/* <Button add={()=>addBox(0)} label= {colors[0]} />
      <Button add={()=>addBox(1)} label="Green Box" />
      <Button add={()=>addBox(2)} label="Blue Box" />
      <Button add={()=>addBox(3)} label="Yellow Box" /> */}

      {colors.map((color,index)=>{
        return <Button add={()=>addBox(index)} label= {`Add ${colors[index].charAt(0).toUpperCase()+colors[index].substring(1)} box`} />
      }) }


    </div>
  );
}

export default SidePanel;
