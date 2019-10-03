import { combineReducers } from "redux";
import pageReducer from "./pageReducers";
export default combineReducers({
    index: pageReducer
});
