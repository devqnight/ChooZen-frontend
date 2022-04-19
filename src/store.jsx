import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { getFromStorage } from './utils/storage.tools';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export { store };