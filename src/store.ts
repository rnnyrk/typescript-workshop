import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'ducks';

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({ ...appReducers });

export default createStore(reducers, middleware);
