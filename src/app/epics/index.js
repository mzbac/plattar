import { combineEpics } from 'redux-observable';
import {
  getPropertyDataEpic,
  getPropertyDataLoaderEpic,
} from './getPropertyDataEpic';

const rootEpic = combineEpics(
  getPropertyDataEpic,
  getPropertyDataLoaderEpic
);
export default rootEpic;

