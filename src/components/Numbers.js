import React from 'react'
import OutputField from './OutputField';
import InputField from './InputField';
var result = 10;
function Numbers() {
  return (
    <div>
        <OutputField props={result} />
        <InputField/>
        
    </div>
  )
}

export default Numbers