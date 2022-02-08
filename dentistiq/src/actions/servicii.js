import { PROTEICA } from './actionTypes';
import { IMPLANTOLOGIE } from './actionTypes';
import { CHIRURGIE } from './actionTypes';
import { ODODONTIE } from './actionTypes';
import { ENDODONTIE } from './actionTypes';
import { ORTODONTIE } from './actionTypes';

export const proteica = (path) => {
  return {
    type: PROTEICA,
    payload: path,
  };
};

export const implantologie = (path) => {
  return {
    type: IMPLANTOLOGIE,
    payload: path,
  };
};

export const chirurgie = (path) => {
  return {
    type: CHIRURGIE,
    payload: path,
  };
};

export const ododontie = (path) => {
  return {
    type: ODODONTIE,
    payload: path,
  };
};

export const endodontie = (path) => {
  return {
    type: ENDODONTIE,
    payload: path,
  };
};

export const ortodontie = (path) => {
  return {
    type: ORTODONTIE,
    payload: path,
  };
};
