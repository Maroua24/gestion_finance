import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import factureReducer from './reducer';

const rootReducer = combineReducers({
    facture: factureReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
