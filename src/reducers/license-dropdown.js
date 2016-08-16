import { PropTypes } from 'react';

export const licenseDropdownPropTypes = {
  items: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired
};

const defaultState = {
  items: [
    {
      value: "0",
      label: "License #0"
    },
    {
      value: "1",
      label: "License #1"
    },
    {
      value: "2",
      label: "License #2"
    },
    {
      value: "3",
      label: "License #3"
    }
  ],
  username: "Username",
  selected: {
    value: "1",
    label: "License #1"
  },
  show: false,
  style: {}
};

const licenseDropdown = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "KMT_LD_TOGGLE":
      state = Object.assign({}, state, {show: !state.show});
      break;

    case "KMT_LD_UPDATE_STYLE":
      state = Object.assign({}, state, {style: action.style});
      break;
  }
  return state;
};

export default licenseDropdown;
