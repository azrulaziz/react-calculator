import React, { Component } from 'react';

const Display = (props) => {
    const {display} = props
    return (
      <div>
        <h3>{display}</h3>
      </div>
    )
  }

  export default Display;