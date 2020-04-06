import { combineReducers } from "redux";

import addCartReducer from "./addCartReducer";

const rootReducer = combineReducers({ addCartReducer });

export default rootReducer;
