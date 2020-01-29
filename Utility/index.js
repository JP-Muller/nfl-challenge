import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from '../src/Redux/Reducers/rootReducer';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};