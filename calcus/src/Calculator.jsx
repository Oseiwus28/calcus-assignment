import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');

  const handleDigitClick = (value) => {
    if (display === '0') {
      setDisplay(value);
      setInput(value);
    } else {
      setDisplay(display + value);
      setInput(input + value);
    }
  };

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setDisplay(display + operator);
      setInput(input + operator);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setInput('');
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setDisplay(result.toString());
      setInput(result.toString());
    } catch (error) {
      setDisplay('Error');
      setInput('');
    }
  };

  return (
    <div id="calculator">
      <div id="displayArea">{display}</div>
      <div id="keys">
        <button onClick={handleClear} style={{ backgroundColor: 'rgba(252, 171, 20, 0.87)', color: 'white' }}>
          AC
        </button>
        <button className="btn" onClick={() => handleDigitClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleDigitClick('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleDigitClick('3')}>
          3
        </button>
        <button className="btn" onClick={() => handleDigitClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleDigitClick('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleDigitClick('6')}>
          6
        </button>
        <button className="btn" onClick={() => handleDigitClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleDigitClick('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleDigitClick('9')}>
          9
        </button>
        <button className="btn" onClick={() => handleDigitClick('0')}>
          0
        </button>
        <button className="btn" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className="btn" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button className="btn" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button className="btn" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button className="btn">.</button>
        <button id="equal" className="btn" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
