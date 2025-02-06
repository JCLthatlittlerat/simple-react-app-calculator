import React from 'react'
import Buttons from './Buttons'
// import { useState } from 'react';
var result=0;
function Numbers() {
  // const [number,setNumber] = React.useState(0);
  var data = {
    result:0,
    number:0
  }
  return (
    <div>

      <div>Result: {result}</div>
       <input name='number' className='inputFieldArea' placeholder='Enter a number'/>
      <Buttons props= {data} />
    </div>
  )
}

export default Numbers