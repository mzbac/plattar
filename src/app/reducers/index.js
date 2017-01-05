import { combineReducers } from 'redux';
import {
  property,
  propertyError,
} from './property';

import { loadingState } from './loadingState';

const rootReducer = combineReducers({
  property,
  propertyError,
  loadingState,
});

export default rootReducer;