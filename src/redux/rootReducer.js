import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import counter from './modules/counter/counterReducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
