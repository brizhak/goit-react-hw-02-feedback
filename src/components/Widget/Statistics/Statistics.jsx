import { Component } from 'react';

class Statistics extends Component {
  state = {
    total: this.props.total,
  };

  totalUpdate = () => {
    if (this.state.total !== this.props.total) {
      this.setState(prevState => ({ total: (prevState += 1) }));
    }
  };

  render() {
    const { namesProperty } = this.props;

    return (
      <ul>
        <li key="good">Good : {namesProperty.good}</li>
        <li key="neutral">Neutral : {namesProperty.neutral}</li>
        <li key="bad">Bad : {namesProperty.bad}</li>
        <li key="total">Total : {this.state.total}</li>
        <li key="percentage">Positive Feedback : </li>
      </ul>
    );
  }
}

export default Statistics;
