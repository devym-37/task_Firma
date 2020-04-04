// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import clickReducer from "./clickReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({ clickReducer });

// Exports
export default rootReducer;
