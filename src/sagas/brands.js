import * as brandsActionCreators from '../actionCreators/brands'
import * as brandsActionTypes from '../actionTypes/brands'
import {call, put, takeLatest} from 'redux-saga/effects';

function* getBrands() {
  try {
    let brands = yield call(() => fetch(`http://localhost:4000/brands`)
      .then(response => response.json()));
    yield put(brandsActionCreators.showBrands(brands))
  } catch (error) {
    yield put(brandsActionCreators.showBrandsError(error))
  }
}

export function* getBrandsWatcher() {
  yield takeLatest(brandsActionTypes.FETCH_BRANDS, getBrands)
}