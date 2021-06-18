// Code Keypad Component Here
import React from "react"

export default function Keypad(){
  return(
    <div>
        <input
          type="password"
          onKeyUp={()=>console.log('Entering password...')}
        />
      </div>
  )
}
