import Rx from 'rxjs';
import {
  GETPROPERTYDATASTART,
  GETPROPERTYDATAFAIL,
  GETPROPERTYDATACOMPLETE,
  GETPROPERTYDATALOADERSTART,
} from '../constants';
import {
  fetchPropertyInputDebounceTime,
  fetchPropertyDataEndpoint,
} from '../config';

export const getPropertyDataEpic = action$ =>
  action$.ofType(GETPROPERTYDATALOADERSTART)
    .switchMap(({ payload: searchText }) => Rx.Observable.fromPromise(
      fetch(`${fetchPropertyDataEndpoint}${searchText}`)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          }
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        })
        .then((response) => response.json())
        .catch((error) => ({ error }))
    ))
    .map(res => {
      if (res.error) {
        return { type: GETPROPERTYDATAFAIL, payload: res.error };
      }
      return { type: GETPROPERTYDATACOMPLETE, payload: res };
    });

export const getPropertyDataLoaderEpic = action$ =>
  action$.ofType(GETPROPERTYDATASTART)
    .map(e => e.payload.target.value)
    .debounceTime(fetchPropertyInputDebounceTime)
    .distinctUntilChanged()
    .map(searchText => ({ type: GETPROPERTYDATALOADERSTART, payload: searchText }));