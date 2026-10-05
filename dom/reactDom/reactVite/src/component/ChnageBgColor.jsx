import React, { use, useState } from 'react'

export default function ChnageBgColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(0);
  const [catHeight , setHeight]=useState(200);
  const [catWidth, setWidth]=useState(200);
  const [catRotate, setRotate]=useState(90);
  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));

    alert("bg color changed")



  }
  function inhanceHeight(){
    setHeight(catHeight+50);
    alert("height changed");
  }
  function decHeight(){
    setHeight(catHeight-50);
    alert("decreased height");
  }
  function incWidth(){
    setWidth(catWidth+50);
  }
  function decWidth(){
    setWidth(catWidth-50);
  }
  function imgRotate(){
    setRotate(catRotate +45 );
    
  }
  return (
    <div>ChnageBgColor
      <h2></h2>

      <div style={{ backgroundColor: `rgb(${red},${green},${blue})`, width: "200px", height: "200px",border:"5px solid teal", display:"flex", justifyContent:"center",alignItems:"center", }}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/264/913/small_2x/tabby-cat-lying-down-looking-up-with-curiosity-and-charm-png.png" alt="" style={{ width: "200px", height:catHeight, transform:`rotate(${catRotate}deg)` }} />
        <h1>  
        </h1>

      </div>
      <button onClick={setColor} style={{ alignContent: screenLeft }}>ChnageBgColor1</button><br />
      <button onClick={inhanceHeight}>ChangeHeight</button> <span></span>
      <button onClick={decHeight}>decreased</button><br />
      <button onClick={incWidth}>incWidth</button> <span></span>
      <button onClick={decWidth}>decWidth</button><br />
      <button onClick={imgRotate}>Rotate</button>
      color code:{red},{green},{blue};<br />
      height:{catHeight};
      width:{catWidth};
      <div></div>
    </div>
  )
}
