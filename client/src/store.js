import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = {};
const middleware = [thunk];
export const history = createBrowserHistory();
const store = createStore(
	rootReducer,
	initialState,
	compose(applyMiddleware(...middleware))
);
export default store;
