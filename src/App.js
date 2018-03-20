import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import './App.css';
import Buttons from './components/Buttons'; 
import Display from './components/Display';

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
  }

  render() {
    console.log(this.state.calculation);
    return (
      <div className="App">
          <h1 className="App-title">Calculator</h1>
          <Display/>
          <Buttons handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
