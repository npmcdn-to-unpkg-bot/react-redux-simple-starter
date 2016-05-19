import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import LandingView from '../modules/landing/views/LandingView';
import CounterView from '../modules/counter/views/CounterView';

const routes = <Route path="/" component={App}>
  <IndexRoute component={LandingView} />
  <Route path="counter" component={CounterView} />
</Route>;

export default routes;
