import {
  GETPROPERTYDATACOMPLETE,
  GETPROPERTYDATASTART,
  GETPROPERTYDATAFAIL,
} from '../constants';

export const property = (state = {}, action) => {
  switch (action.type) {
    case GETPROPERTYDATACOMPLETE:
      return action.payload;

    default:
      return state;
  }
};

export const propertyError = (state = '', action) => {
  switch (action.type) {
    case GETPROPERTYDATASTART:
      return '';
    case GETPROPERTYDATAFAIL:
      return `Error : ${action.payload.message}`;
    default:
      return state;
  }
};
