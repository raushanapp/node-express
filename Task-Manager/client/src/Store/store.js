import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./TaskAppReducer/reducer";

export const store= legacy_createStore(reducer,applyMiddleware(thunk))