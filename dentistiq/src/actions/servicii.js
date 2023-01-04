import actionType from './actionTypes';
import { dispatch } from '../store/store';

export default {
  protetica: (path) => {
    dispatch({
      type: actionType.PROTETICA,
      payload: path,
    });
  },

  implantologie: () => {
    dispatch({
      type: actionType.IMPLANTOLOGIE,
    });
  },

  chirurgie: () => {
    dispatch({
      type: actionType.CHIRURGIE,
    });
  },

  ododontie: () => {
    dispatch({
      type: actionType.ODODONTIE,
    });
  },

  endodontie: () => {
    dispatch({
      type: actionType.ENDODONTIE,
    });
  },

  ortodontie: () => {
    dispatch({
      type: actionType.ORTODONTIE,
    });
  },
};
