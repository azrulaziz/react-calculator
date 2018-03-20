import React, { Component } from 'react';

const Buttons = (props) => {
    const {handleClick, calculation} = props;
    return (
      <div>
        <div>
          <button onClick={handleClick} value="c">C</button>
          <button onClick={handleClick} value="/">/</button>
          <button onClick={handleClick} value="%">%</button>
         </div> 
        <div>
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleClick} value="*">*</button>
        </div>
        <div>
          <button onClick={handleClick} value="4">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handleClick} value="6">6</button>
          <button onClick={handleClick} value="-">-</button>
        </div>
        <div>
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleClick} value="+">+</button>
        </div>
        <div>
          <button onClick={handleClick} value="0">0</button>
          <button onClick={handleClick} value=".">.</button>
          <button onClick={handleClick} value="=">=</button>
        </div>
      </div>
    )
  }

  export default Buttons;