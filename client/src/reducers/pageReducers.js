
import history from "../history";

const initialState = {
	index: 0
};

export default function(state = initialState, action) {
	switch (history.location.pathname) {
		case "/":
			return {
				index: 0
			};
		case "/about":
			return {
				index: 1
			};
		case "/gallery":
			return {
				index: 2
			};
		case "/contact":
			return {
				index: 3
			};
		default:
			return state;
	}
}
