import * as brandActionTypes from '../actionTypes/brands'
import {Map} from 'immutable';

export default (prevState = Map({brands: [], isLoggedIn: false}), action) => {
  switch (action.type) {
    case brandActionTypes.FETCH_BRANDS:
      return prevState;
    case brandActionTypes.FETCH_BRANDS_SUCCESS:
      return prevState.set('brands', action.brands);
    case brandActionTypes.FETCH_BRANDS_ERROR:
      return prevState.set('error', action.error);
    default:
      return prevState;
  }
}