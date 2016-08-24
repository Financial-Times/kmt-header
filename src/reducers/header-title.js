import { PropTypes } from 'react';

export const headerTitleTypes ={
  label: PropTypes.string.isRequired,
  summary: PropTypes.string
};

const defaultState = {
  label: "KMT",
  summary: "maximising your FT experience"
};

const headerTitle = (state = defaultState, action = {}) => {
  return state;
};

export default headerTitle;
