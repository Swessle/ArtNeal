import { FIRST, SECOND, THIRD } from "../actions/types";

const initialState = {
	index: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FIRST:
			return {
				index: 1
			};
		case SECOND:
			return {
				index: 2
			};
		case THIRD:
			return {
				index: 3
			};
		default:
			return state;
	}
}
