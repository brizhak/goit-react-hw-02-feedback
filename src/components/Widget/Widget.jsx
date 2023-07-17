import React, { Component } from 'react';
import Buttons from './Buttons';

class Widget extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  render() {
    const buttons = Object.keys(this.state)
    console.log(buttons)
    return (
        <>
        <h2>Please leave feedback</h2>
        <ul>
          <Buttons buttons={buttons}/>
        </ul>
        <h2>Hello</h2>
        </>
    );
  }
}

export default Widget;
