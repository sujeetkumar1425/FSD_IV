import React, { useEffect, useState } from 'react'

export default function ReactUseEffect() {
    const [counter,setCounter]=useState(0);
    const [pointer, setPointer]=useState(100);
    function count(){
        setCounter(counter+5);
    }
    function dec(){
        setPointer(pointer-5);
        setCounter(counter-5);
    }
    useEffect (()=>{
        console.log("counter="+counter);
        console.log("pointer="+pointer);
    },[counter,pointer])
  return (
    <div style={{color:"yellowgreen",}}>ReactUseEffect
    <h1>Counter value={counter}</h1>
    <h1 style={{color:"green",}}>Pointer value={pointer}</h1>
    <button onClick={count}>inc</button>
    <button onClick={dec}> dec</button>
    </div>
  )
}
