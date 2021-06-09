// Code EyesOnMe Component Here
import React from 'react';

export default function(){

  const onFocus = () => console.log('Good!')

  const onBlur = () => console.log('Hey! Eyes on me!')


    return (
      <button onFocus={onFocus} onBlur={onBlur}>
        Eyes on me, please!
      </button>
    )
}