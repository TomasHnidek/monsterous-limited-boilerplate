import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Logger with default options
//import logger from 'redux-logger';

import reducer  from './slices';

const middleware = [thunk/*, logger*/];

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, applyMiddleware(...middleware));
    return store;
}
