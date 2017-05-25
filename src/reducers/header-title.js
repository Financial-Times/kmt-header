import { PropTypes } from 'react';

export const headerTitleTypes ={
  label: PropTypes.string.isRequired,
  summary: PropTypes.string
};

const defaultState = {
  label: "Knowledge & administration tools",
  summary: ""
};

const headerTitle = (state = defaultState, action = {}) => {
  return state;
};

export default headerTitle;
