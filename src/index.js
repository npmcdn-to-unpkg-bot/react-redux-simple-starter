import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import routes from './routes';
import Root from './containers/Root';

const store = configureStore();

render(<Root store={store} routes={routes} />, document.getElementById('root'));
