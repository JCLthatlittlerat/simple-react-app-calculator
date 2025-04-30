import FeedBackForm from './components/controlled-elements/FeedBackForm';
import MapFunctionDemo from './components/MapFunctionDemo';
import MapAndRender from './components/MapAndRender';

import './App.css';
// import Header from './components/Header';
// import Numbers from './components/Numbers';

// import NameFormUncontrolled from "./components/controlled-elements/NameFormUncontrolled.jsx";
// import NameFormControlled from "./components/controlled-elements/NameFormControlled.jsx";
// import { useState } from 'react'; //for the 'NameFormControlled';

function App() {

  return (
    <div>
      <FeedBackForm />
      <MapFunctionDemo />
      <MapAndRender />

    </div>
  );



  // ============ FeedBack Form version 1.0 ===========
  // import React from 'react'
  // import {useState} from 'react'
  // return(
  //     const [score, setScore] = useState('10');
  //     const [comment, setComment] = useState("");
  //     const handleSubmit = (e) => {
  //       e.preventDefault();
  //       if (Number(score) <= 5 && comment.length <= 10) {
  //         alert("please provide a comment explaining why the experience was poor.")
  //         return;
  //       }
  //       setComment("");
  //       setScore("10");

  //     }
  //     return (
  //       <div className='App'>
  //         <form onSubmit={handleSubmit} className='formContainer'>
  //           <fieldset>
  //             <div className='Field'>
  //               <div>
  //                 <h2>FeedBack form</h2>
  //                 <label htmlFor='inputRange'>Score: {score}⭐</label>
  //                 <div  >
  //                   <input
  //                     className='inputRange'
  //                     id='inputRange'
  //                     type='range'
  //                     min={0}
  //                     max={10}
  //                     value={score}
  //                     onChange={(e) => setScore(e.target.value)}
  //                   />

  //                 </div>
  //                 <div>
  //                   <label htmlFor='textareaField'>Comment: </label>
  //                   <div>
  //                     <textarea value={comment} onChange={(e) => setComment(e.target.value)} className='textareaField' id='textareaField'></textarea>
  //                   </div>
  //                 </div>
  //               </div>
  //               <input type='submit' value={'Submit'} className='submitBtn' />
  //             </div>
  //             <p>Version 1.0</p>
  //           </fieldset>
  //         </form>
  //       </div>
  //     );
  //   )
















  //======== NameFormControlled ========
  // const [name, setName] = useState("");
  // const handleSubmit = (e) => {
  //   console.log("for submitted!")
  //   e.preventDefault(); //this prevents the default behaivor of the DOM and let us control the state ourself instead controlling by the DOM.
  //   setName("");
  // }
  // return (
  //   <div className="App">

  //     <form onSubmit={handleSubmit}>
  //       <h2>nameFormControlled</h2>
  //       <fieldset>
  //         <div className="Field">
  //           <label htmlFor="name">Name: </label>
  //           <input type="text" placeholder='Name' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
  //         </div>
  //         <button disabled={!name} type="submit">Submit</button>
  //       </fieldset>

  //     </form>


  //   </div>
  // );
}

export default App;
