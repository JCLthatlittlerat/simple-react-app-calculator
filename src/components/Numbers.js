import React from 'react'
import Buttons from './Buttons'
import { useState, useRef } from 'react';
var result=0;
function Numbers() {
  const [number, setNumber] = useState(0);
  const inputRef = useState(null);
  const resultRef = useRef(null);

  // const add = (number,result) => { return result+=number;};
  // const subtract = (number,result) => { return result-=number; };
  // const multiply = (number,result) => { return result*=number; };
  // const divide = (number,result) => { return result/=number; };
function add ()
{
  setNumber(result+=number);
}

function subtract ()
{
  setNumber(result-=number);
}

function multiply ()
{
  setNumber(result*=number);
}
function divide ()
{
  setNumber(result/=number);
}
function resetInput (e)
{
  e.preventDefault();  //I have no idea what this does
  inputRef.current.value=0
  // setNumber(0)
}

function resetResult (e)
{
  e.preventDefault();
  resultRef.current.value=0
  // setNumber((result)=> result * 0)       this options didn't work because 'result' is not state.
  // setNumber(result=0)
}

  // var data = {
  //   result:0,
  //   number:0
    
  // }
  const handleChange = (event) =>{         
    setNumber(Number(event.target.value));   //Convert  input ot a number because by default the value of input is string even though type="number"
  }
  return (
    <div>
      <div ref={resultRef} >Result: {result}</div>
       <input ref={inputRef} type="number" value={number} onChange={handleChange} className='inputFieldArea' placeholder='Enter a number'/>
       <div className='Buttons'>
        <Buttons label="add" onClick={add} />
        <Buttons label="subtract" onClick={subtract} />
        <Buttons label="divide" onClick={divide} />
        <Buttons label="multiply" onClick={multiply} />
        <Buttons label="resetInput" className="resetInput" onClick={resetInput} />
        <Buttons label="resetResult" className="resetResult" onClick={resetResult} />
       </div>
    </div>
  )
}

export default Numbers