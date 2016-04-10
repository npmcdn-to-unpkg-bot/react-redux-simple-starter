import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// if (process.env.BROWSER) {
require('../styles/core.scss');
// }

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>{routes}</Router>
        </div>
      </Provider>
    );

  }
}
