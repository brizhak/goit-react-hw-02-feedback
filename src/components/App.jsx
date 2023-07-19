import Widget from './Widget';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    let idBtn = e.target.id;
    for (let id in this.state) {
      if (id === idBtn) {
        this.setState(prevState => ({ [idBtn]: (prevState[idBtn] += 1) }));
        this.countTotalFeedback();
      }
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad + 1;
    return total;
  };

  countPositiveFeedbackPercentage = () => {};
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Widget
          namesProperty={{ good, neutral, bad }}
          onLeaveFeedback={this.onLeaveFeedback}
          total={this.countTotalFeedback}
        />
      </>
    );
  }
}

export default App;
