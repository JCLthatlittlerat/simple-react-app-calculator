import React from 'react'

function Buttons(props) {
  const add = (props) => { return props.result+=props.number;};
  const subtract = (props) => { return props.result-=props.number; };
  const multiply = (props) => { return props.result*=props.number; };
  const divide = (props) => { return props.result/=props.number; };


  return (
    <div>
        <button onClick={add} className='addButton'>add</button>
        <button onClick={subtract} className='subtractButton'>subtract</button>
        <button onClick={multiply} className='multiplyButton'>multiply</button>
        <button onClick={divide} className='divideButton'>divide</button>
        <button className='reset-inputButton'>reset input</button>
        <button className='reset-resultButton'>reset result</button>
    </div>
  )
}

export default Buttons