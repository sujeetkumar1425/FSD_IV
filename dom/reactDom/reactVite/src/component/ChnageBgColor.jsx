import React, { use, useState } from 'react'

export default function ChnageBgColor() {
    const [red,setRed]=useState(250);
    const [green,setGreen]=useState(25);
    const [blue,setBlue]=useState(250);
    function setColor(){
        
    }
  return (
    <div>ChnageBgColor
        <h2></h2>
        
        <div style={{backgroundColor:`rgb(${red},${green},${blue})`}}>
            <h1>p
            </h1>
            </div>
        <div></div>
    </div>
  )
}
