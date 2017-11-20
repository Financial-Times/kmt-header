const defaultState = {
	isExpanded: false,
	isValid: false
};

const feedbackForm = (state = defaultState, action = {}) => {

	switch (action.type) {
	case 'F_TOGGLE':
		state = Object.assign({}, state, {isValid: false, isExpanded: !state.isExpanded});
		break;
	case 'F_TOGGLE_VALID':
		state = Object.assign({}, state, {isValid: !state.isValid});
		break;
	}
	return state;
};

export default feedbackForm;
