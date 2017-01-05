import {
  GETPROPERTYDATACOMPLETE,
  GETPROPERTYDATALOADERSTART,
  GETPROPERTYDATAFAIL,
} from '../constants';

export default (state = false, action) => {
  switch (action.type) {
    case GETPROPERTYDATALOADERSTART:
      return true;
    case GETPROPERTYDATACOMPLETE:
      return false;
    case GETPROPERTYDATAFAIL:
      return false;
    default:
      return state;
  }
};
