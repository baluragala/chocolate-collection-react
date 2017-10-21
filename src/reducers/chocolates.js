import * as chocolateActionTypes from '../actionTypes/chocolates';
import {Map} from 'immutable';

export default (prevState = {chocolates: []}, action) => {
  switch (action.type) {
    case chocolateActionTypes.FETCH_CHOCOLATES:
      return new Map(action);
    default:
      return prevState;
  }
}