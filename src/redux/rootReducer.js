import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './modules/counter/counterReducer';

const rootReducer = combineReducers({
  routing,
  counter,
});

export default rootReducer;
