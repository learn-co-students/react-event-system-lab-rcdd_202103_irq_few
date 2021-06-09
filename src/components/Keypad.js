// Code Keypad Component Here
import React from 'react';

export default function(){

  const handleInputPassword = () => console.log('Entering password...')


    return (
      <div>
        <input 
          type="password"
          onKeyUp={handleInputPassword} 
        />
      </div>
    )
  
}