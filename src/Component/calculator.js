import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="container">
        <div className="calc-container">
          <div className="screen" />
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn orange">÷</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn orange">x</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn orange">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn orange">+</button>
          <button type="button" className="btn zero">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn orange">=</button>
        </div>
      </div>

    );
  }
}
