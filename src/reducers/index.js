import brandsReducer from './brands';
import usersReducer from './users';
import chocolatesReducer from './chocolates';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  brands: brandsReducer,
  users: usersReducer,
  chocolates: chocolatesReducer,
});

export default rootReducer;