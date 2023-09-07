import thunk from 'redux-thunk';
import {Reducer} from './Reducer';
import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  counter: Reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
