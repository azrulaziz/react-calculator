import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: [],
      display: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {calculation, display} = this.state;
    const value = e.target.value;
   
    switch (value) {

      case 'c': {
        this.setState({
          calculation: [],
          display: []
        });
      break;
      }

      case '=': {
        const result = math.eval(calculation.join(''));
        const arr = calculation;
        const newArr = update(arr, {$set: [result]});
        this.setState({
          calculation: newArr,
          display: newArr
        });
      break;  
      }

      default: {
        const arr = calculation;
        const newArr = update(arr, {$push: [value]});
        this.setState({
          calculation: newArr,
          
        });
      }
    }
  }

  render() {
    console.log(this.state.calculation);
    return (
      <div className="App">
          <h1 className="App-title">Calculator</h1>
          <Display calculation={this.state.calculation} display={this.state.display}/>
          <Buttons handleClick={this.handleClick} calculation={this.state.calculation}/>
      </div>
    );
  }
}

const Display = (props) => {
  const {display, calculation} = props
  return (
    <div>
      <h3>{display && calculation}</h3>
    </div>
  )
}

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
        <button onClick={handleClick} value="." disabled={calculation.includes('.') ? true : false}>.</button>
        <button onClick={handleClick} value="=">=</button>
      </div>
    </div>
  )
}

export default App;
