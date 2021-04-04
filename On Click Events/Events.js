import React, { useState } from 'react';
import './Events.css';
const Events=()=>{
    const purple='purple';
    const [nColor,setnColor]=useState(purple);
    const [nname,setnName]=useState('click me');
const  colorChange=()=>{
    let newBg='yellow';
    let newName='DoubleClick'
   setnColor(newBg);
   setnName(newName);
   
}
const doubleColorChange=()=>{
    let newBg='green';
    setnColor(newBg);
    setnName('Single Click');
}
    return(
     
        <>
        <div style={{backgroundColor:nColor}}>
            <button onClick={colorChange} onDoubleClick={doubleColorChange}> {nname}</button>
        </div>
        </>
    );
}

export default Events;
