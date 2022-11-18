import { combineReducers } from 'redux';
import topBrandsReducer from './topBrandsReducer';
import popularProducts from './popularProducts';

export default combineReducers({
  popularProducts,
  topBrandsReducer
});
