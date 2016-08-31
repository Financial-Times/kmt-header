import { PropTypes } from 'react';

export const extraActionsTypes ={
  items: PropTypes.array
};

const defaultState = {
  items: [
    {
      label: "Sign out",
      href: "https://accounts.ft.com/logout"
    }
  ]
};

const extraActions = (state = defaultState, action = {}) => {
  return state;
};

export default extraActions;
