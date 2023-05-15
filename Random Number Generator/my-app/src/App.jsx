
import { useState } from 'react';
import './App.css';
import NumberForm from './components/NumberForm';

function App() {
  const[centerNumber,setCenterNumber]=useState();
  const[minValue,setMinValue]=useState();
  const[maxValue,setMaxValue]=useState();
  function GetNumber(e){
      e.preventDefault();
      setCenterNumber(Math.floor(Math.random()*(maxValue-minValue+1)+minValue))
  }
  return (
    <div className="App">
          <h1>Random Number Generator</h1>
          <NumberForm centerNumber={centerNumber} GetNumber={GetNumber} setMinValue={setMinValue} setMaxValue={setMaxValue}></NumberForm>
    </div>
  );
}

export default App;
