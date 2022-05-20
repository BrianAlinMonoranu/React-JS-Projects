import "./design.css";
import { useState } from 'react';

function App() {

  //Contains a variable calc and a function called setCalc
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("0");

  const operations = ['/', '*', '+', '-', '.'];

  const updateCalc = input => {

    if(operations.includes(input) && calc === '' || operations.includes(input) && operations.includes(calc.slice(-1))){
       return;
    }
    
    setCalc(calc + input);

  }

  const createDigits = () => {
  const digits = [];

    for(let i = 1; i < 10; i++){
       digits.push(<button onClick = {() => updateCalc(i.toString()) } key ={i}> {i} </button>)
    }

    return digits
  }

  const clearUp = () => {
    const input = calc.slice(0,0);
    const newInput = result.slice(0,0);
    setResult(newInput);
    setCalc(input);
    return;
    
  }

  const calculate = () => {
    setResult(eval(calc).toString());
  }

  const deleteInput = () => {
    const input = calc.slice(0, -1);
    setCalc(input);
  }

  return (
        <div className= "calculator">
          <div className= "output">
            <div className="TopValue">{calc || "0"}</div>
              <div className = "BottomValue">{result}</div>

          </div>
          
          <button onClick = {() => clearUp()} className="mod">AC</button>
          <button onClick= {() => deleteInput()} >DEL</button>
          <button onClick = {() => updateCalc('/')}>/</button>
          <button onClick = {() => updateCalc('*')}>*</button>
          <button onClick = {() => updateCalc('+')}>+</button>
          <button onClick = {() => updateCalc('-')}>-</button>
            
            {createDigits()}

            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate} className="mod">=</button>
          </div>

  );


}

export default App;
