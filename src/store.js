import { useState } from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import { authReducer } from "./reducers/authReducer";

//we use combine reducers to be able to use multiple reducers in the store create with createStore method
const reducers = combineReducers({
	auth: authReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

