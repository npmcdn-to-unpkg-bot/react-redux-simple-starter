import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../containers/CoreLayout';
import HomeView from '../views/HomeView';
import CounterView from '../views/CounterView';

const routes = <Route path="/" component={CoreLayout}>
  <IndexRoute component={HomeView} />
  <Route path="counter" component={CounterView} />
</Route>;

export default routes;
