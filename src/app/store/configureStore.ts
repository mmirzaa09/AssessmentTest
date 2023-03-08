import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const middleware = [...getDefaultMiddleware(), thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
