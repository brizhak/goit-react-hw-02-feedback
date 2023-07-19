import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { id, option, onLeaveFeedback } = this.props;
    return (
      <>
        <li>
          <button type="button" id={id} onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      </>
    );
  }
}

export default FeedbackOptions;
