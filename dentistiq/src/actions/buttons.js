import { BUTTONS } from './actionTypes';

export const buttons = (path) => {
  return {
    type: BUTTONS,
    payload: path,
  };
};
