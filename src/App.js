import './App.css';
// import Header from './components/Header';
// import Numbers from './components/Numbers';

// import NameFormUncontrolled from "./components/controlled-elements/NameFormUncontrolled.jsx";
// import NameFormControlled from "./components/controlled-elements/NameFormControlled.jsx";
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    console.log("for submitted!")
    e.preventDefault(); //this prevents the default behaivor of the DOM and let us control the state ourself instead controlling by the DOM.
    setName("");
  }
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <h2>nameFormControlled</h2>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder='Name' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>

      </form>


    </div>
  );
}

export default App;
