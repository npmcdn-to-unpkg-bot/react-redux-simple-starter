import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/counter';
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

export default connect((mapStateToProps), actions)(CounterView);
