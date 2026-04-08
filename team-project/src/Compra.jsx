import React from "react";
import {useState, useRef } from "react";

export default function Compra() {
    const [state, setState] = useState(0);
    let variable = 0;
    const ref = useRef(0);
    

    return (
        <div>
            <p>state: {state}</p>
            <button onClick={()=>{setState(state+1)}}>state: up!!</button>

            <p>variable: {variable}</p>
            <button onClick={()=>{variable++}}>변수: up!!</button>

            <p>Ref: {ref.current}</p>
            <button onClick={()=>{ref.current++}}>ref: up!!</button>
        </div>
    )
}
