import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterView from '../views/CounterView';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <CounterView />

        </div>
      </Provider>
    );

  }


}
