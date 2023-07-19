import { Component } from 'react';
import style from './FeedBackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        <ul className={style.btnList} onClick={onLeaveFeedback}>
          {options.map(option => {
            return (
              <li key={option}>
                <button className={style.btn} type="button" id={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FeedbackOptions;
