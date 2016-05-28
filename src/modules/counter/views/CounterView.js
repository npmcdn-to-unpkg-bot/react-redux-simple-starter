import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { actions } from '../counter';
import Counter from '../components/Counter';

function CounterView({ counter, increment, decrement }) {
  return (
    <div>
      <Helmet title="Counter" />
      <Counter counter={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect((mapStateToProps), actions)(CounterView);
