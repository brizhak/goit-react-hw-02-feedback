import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Widget extends Component {
  render() {
    const { namesProperty, onLeaveFeedback, total } = this.props;

    const statisticsItems = Object.keys(namesProperty);

    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            {statisticsItems.map(option => (
              <FeedbackOptions
                key={option}
                id={option}
                option={option}
                onLeaveFeedback={onLeaveFeedback}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2>Statistics</h2>
          <Statistics namesProperty={namesProperty} total={total} />
        </div>
      </>
    );
  }
}

export default Widget;
