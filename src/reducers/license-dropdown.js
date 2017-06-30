import { PropTypes } from 'react';
import { getCookieUserDetails } from './../helpers/helpers';

export const licenseDropdownPropTypes = {
  items: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  filterStr: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};

// get the user details from the cookies
const cookieUserDetails = getCookieUserDetails();

const initialState = {
  items: [],
  selected: {
    licenseId: "",
    label: ""
  },
  show: false,
  filterStr: "",
  style: {}
};

const defaultState = Object.assign({}, initialState, cookieUserDetails);

const licenseDropdown = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "KMT_LD_TOGGLE":
      state = Object.assign({}, state, {show: !state.show});
      break;

    case "KMT_LD_UPDATE_STYLE":
      state = Object.assign({}, state, {style: action.style});
      break;

    case "KMT_LD_UPDATE_FILTER":
      state = Object.assign({}, state, {filterStr: action.filterStr});
      break;
  }
  return state;
};

export default licenseDropdown;
