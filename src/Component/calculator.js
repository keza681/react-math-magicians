import React, { useState } from 'react';
import './calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const Istate = {
    total: 0,
    next: null,
    operation: null,
  };

  const [click, setClick] = useState(Istate);

  const handleClick = (btn) => {
    const btnValue = btn.target.textContent;
    const newClick = { ...click };
    setClick(calculate(newClick, btnValue));
  };

  return (
    <>
      <div className="container">
        <div className="calc-container">
          <div className="screen">
            {click.total}
            {click.operation}
            {click.next}
          </div>
          <button type="button" onClick={handleClick} className="btn">AC</button>
          <button type="button" onClick={handleClick} className="btn">+/-</button>
          <button type="button" onClick={handleClick} className="btn">%</button>
          <button type="button" onClick={handleClick} className="btn orange">÷</button>
          <button type="button" onClick={handleClick} className="btn">7</button>
          <button type="button" onClick={handleClick} className="btn">8</button>
          <button type="button" onClick={handleClick} className="btn">9</button>
          <button type="button" onClick={handleClick} className="btn orange">x</button>
          <button type="button" onClick={handleClick} className="btn">4</button>
          <button type="button" onClick={handleClick} className="btn">5</button>
          <button type="button" onClick={handleClick} className="btn">6</button>
          <button type="button" onClick={handleClick} className="btn orange">-</button>
          <button type="button" onClick={handleClick} className="btn">1</button>
          <button type="button" onClick={handleClick} className="btn">2</button>
          <button type="button" onClick={handleClick} className="btn">3</button>
          <button type="button" onClick={handleClick} className="btn orange">+</button>
          <button type="button" onClick={handleClick} className="btn zero">0</button>
          <button type="button" onClick={handleClick} className="btn">.</button>
          <button type="button" onClick={handleClick} className="btn orange">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
