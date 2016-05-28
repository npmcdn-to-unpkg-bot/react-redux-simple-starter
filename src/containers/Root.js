import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// if (process.env.BROWSER) {
require('../styles/core.scss');
// }

export default function Root({ store, routes, history }){
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>{routes}</Router>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
