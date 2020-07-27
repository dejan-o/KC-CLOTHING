import rootReducer from './rootReducer';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;

