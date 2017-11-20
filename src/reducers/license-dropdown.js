import { PropTypes } from 'react';

export const licenseDropdownPropTypes = {
	show: PropTypes.bool.isRequired,
	filterStr: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired
};

const initialState = {
	show: false,
	filterStr: '',
	style: {}
};

const defaultState = Object.assign({}, initialState);

const licenseDropdown = (state = defaultState, action = {}) => {
	switch (action.type) {
		case 'KMT_LD_TOGGLE':
			state = Object.assign({}, state, {show: !state.show});
			break;

		case 'KMT_LD_UPDATE_STYLE':
			state = Object.assign({}, state, {style: action.style});
			break;

		case 'KMT_LD_UPDATE_FILTER':
			state = Object.assign({}, state, {filterStr: action.filterStr});
			break;
	}
	return state;
};

export default licenseDropdown;
