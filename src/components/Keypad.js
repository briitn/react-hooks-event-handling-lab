// Code Keypad Component Here
import React from "react";

function Keypad(){
    return (
        <input type='password' name="password"
        placeholder="Enter password..."
        onChange={()=>{
            console.log('Entering password...')
        }}></input>
    )
}

export default Keypad