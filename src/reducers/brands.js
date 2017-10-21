import * as brandActionTypes from '../actionTypes/brands'
import {Map} from 'immutable';

export default (prevState = {brands: []}, action) => {
  switch (action.type) {
    case brandActionTypes.FETCH_BRANDS:
      return new Map(action);
    default:
      return prevState;
  }
}