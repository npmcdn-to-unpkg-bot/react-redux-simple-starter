import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        <div className="btn-group m-b-1" role="group">
          <button type="button" className="btn btn-secondary" onClick={decrement}>-</button>
          <button type="button" className="btn btn-secondary" onClick={increment}>+</button>
        </div>
        <p>Count: {counter}</p>
      </div>
    );
  }
}
