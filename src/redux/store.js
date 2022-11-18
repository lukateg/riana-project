import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';

export default configureStore({
  reducer,
  middleware: [thunk]
});
