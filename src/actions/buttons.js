import { dispatch } from '../store/store';
import actionType from './actionTypes';

export const buttons = () => {
  dispatch({
    type: actionType.BUTTONS,
  });
};
