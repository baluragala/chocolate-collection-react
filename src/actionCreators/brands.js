import * as brandActionTypes from '../actionTypes/brands'

export function fetchBrands() {
  return {
    type: brandActionTypes.FETCH_BRANDS
  }
}

export function showBrands(brands) {
  return {
    type: brandActionTypes.FETCH_BRANDS_SUCCESS,
    brands
  }
}

export function showBrandsError(error) {
  return {
    type: brandActionTypes.FETCH_BRANDS_ERROR,
    error
  }
}