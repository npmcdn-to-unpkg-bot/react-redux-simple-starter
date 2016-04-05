import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/modules/counter/counterActions';
import Counter from '../components/Counter';

class CounterView extends Component {

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div>
        <Counter counter={counter} increment={increment} decrement={decrement} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect((mapStateToProps), {
  increment,
  decrement,
})(CounterView);
