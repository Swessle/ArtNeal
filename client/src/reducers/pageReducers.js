import { HOME, ABOUT, GALLERY, CONTACT } from "../actions/types";

const initialState = {
	index: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HOME:
			return {
				index: 0
			};
		case ABOUT:
			return {
				index: 1
			};
		case GALLERY:
			return {
				index: 2
			};
		case CONTACT:
			return {
				index: 3
			};
		default:
			return state;
	}
}
