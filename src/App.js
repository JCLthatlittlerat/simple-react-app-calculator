import './App.css';
import Header from './components/Header';
import OutputField from './components/OutputField';
import InputField from './components/InputField';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Header/>
      <OutputField/>
      <InputField/>
      <Buttons/>
    </div>
  );
}

export default App;
